'use strict';

const EventEmitter = require('events');
import Q3RCon from 'quake3-rcon';
import { rconConfig } from '../../config/rcon';

// Keep this sync with gui/front/src/app/services/rcon.service.ts
const SettableVariables = [
	'g_spskill',
	'bot_minplayers',
	'fraglimit',
	'capturelimit',
	'timelimit',
	'g_gametype',
	'mapname',
];

class RconServiceClass {
	constructor() {
		this._client = new Q3RCon(rconConfig);
		/** @type {EventEmitter} */
		this._emitter = new EventEmitter();
		/** @type {string[]} */
		this._currentPlayers = [];
		this._registerEvents();
	}

	command(cmd) {
		return this._send(cmd).then((data) => this._mapToArray(data));
	}

	status() {
		return this._send('status')
			.then((data) => this._parseStatus(data))
			.then((list) => {

				// Extract real player names
				const players = list.players
					.filter(p => p.address !== '^7bot')
					.map(p => p.name);
				// Guess new players
				for(const player of players) {
					if (player.length && !this._currentPlayers.includes(player)) {
						this._emitter.emit('newPlayer', player);
					}
				}
				// Update player list
				this._currentPlayers = players;

				return list;
			});
	}

	serverInfo() {
		return this._send('serverinfo').then((data) =>
			this._parseServerInfo(data)
		);
	}

	setVar(variable, value) {
		this._validateVariable(variable);
		let cmd = `set ${variable}`;
		cmd = value ? `${cmd} ${this._cleanValue(value)}` : cmd;
		return this._send(cmd).then((data) => this._parseServerInfo(data));
	}

	setGameType(type) {
		return this.command(`set g_gametype ${type}`);
	}

	setMap(name) {
		return this.command(`map ${name}`);
	}

	getEmitter() {
		return this._emitter;
	}

	_registerEvents() {
		setInterval(() => {
			this.status().then((res) => {
				this._emitter.emit('status', res);
			});
		}, 10000);
	}

	_send(cmd) {
		return new Promise((resolve, reject) => {
			try {
				this._validateCommand(cmd);
				this._client.send(cmd, function (response) {
					resolve(response);
				});
			} catch (e) {
				reject(e);
			}
		});
	}

	_mapToArray(rconData) {
		if (rconData) {
			return rconData.split('\n');
		}
	}

	_parseStatus(rconData) {
		let resObj = { players: [] };
		if (rconData) {
			rconData = rconData.replace(/ {2,}/g, ' ');
			const rconArr = rconData.split('\n');
			resObj.currentMap = rconArr[1].split(' ')[1];
			for (let i = 4; i < rconArr.length; i++) {
				let row = rconArr[i].trim().split(' ');
				let player = {};
				player.cl = row.splice(0, 1)[0];
				player.score = row.splice(0, 1)[0];
				player.ping = row.splice(0, 1)[0];
				player.rate = row.splice(-1, 1)[0];
				player.address = row.splice(-1, 1)[0];
				player.name = row.join(' ');
				resObj.players.push(player);
			}
			resObj.raw = rconData;
			return resObj;
		}
	}

	_parseServerInfo(rconData) {
		if (rconData) {
			rconData = rconData
				.split('\n')
				.map((line) => line.replace(/( {2,})/g, ' ').split(' '))
				.map((line) => {
					return { name: line[0], value: line.slice(1).join(' ') };
				})
				.slice(2);
			return rconData;
		}
	}

	/** @param cmd {string} */
	_validateCommand(cmd) {
		const lower = cmd.toLowerCase();
		if (lower.includes('sv_dlurl') || lower.includes('password')) {
			throw new Error(`Command ${cmd} is invalid`);
		}
	}

	/** @param variable {string} */
	_validateVariable(variable) {
		if (!SettableVariables.includes(variable)) {
			throw new Error(`Variable ${variable} is not settable`);
		}
	}

	/**
	 * @param value {string}
	 * @return {string}
	 */
	_cleanValue(value) {
		return value.replace(/[^a-zA-Z0-9_-]/g, '');
	}
}

export const RconService = new RconServiceClass();
