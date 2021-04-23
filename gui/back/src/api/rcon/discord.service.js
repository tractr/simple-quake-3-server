'use strict';

import { Client } from 'discord.js';
import { discordConfig } from '../../config/discord';
import { RconService } from './rcon.service';

class DiscordServiceClass {
	constructor() {
		this._rcon = RconService;
	}

	listen() {
		if (discordConfig.enabled) {
			this._discord = new Client();
			this._discord
				.login(discordConfig.token)
				.then(() => {
					/** @type {TextChannel} */
					this._channel = this._discord.channels.cache.get(
						discordConfig.channel
					);
					if (!this._channel.isText()) {
						throw new Error('Must be a text channel');
					}
					this._registerEvents();
				})
				.catch((error) => {
					console.error(
						`Cannot login to Discord: ${error.toString()}`
					);
				});
		}
	}

	_registerEvents() {
		this._rcon.getEmitter().on('newPlayer', (player) => {
			this._send(
				`*${player}* has connected to ${discordConfig.serverName}`
			);
		});
		this._send(`Server *${discordConfig.serverName}* is online!`);
	}

	/** @param {string} message */
	_send(message) {
		this._channel.send(message).catch((error) => {
			console.error(
				`Cannot send message to Discord: ${error.toString()}`
			);
		});
	}
}

export const DiscordService = new DiscordServiceClass();
