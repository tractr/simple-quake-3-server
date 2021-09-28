'use strict';

import Axios from 'axios';
import { discordConfig } from '../../config/discord';
import { RconService } from './rcon.service';

class DiscordServiceClass {
	constructor() {
		this._rcon = RconService;
	}

	listen() {
		if (discordConfig.enabled) {
			this._discord = Axios.create({
				baseURL: this._getWebhookUrl(),
				timeout: 5000,
			});
			this._registerEvents();
		}
	}

	_getWebhookUrl() {
		return `https://discord.com/api/webhooks/${discordConfig.id}/${discordConfig.token}`
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
		this._discord
			.post('', { content: message })
			.catch((error) => {
				console.error(
					`Cannot send message to Discord: ${error.toString()}`
				);
			});
	}
}

export const DiscordService = new DiscordServiceClass();
