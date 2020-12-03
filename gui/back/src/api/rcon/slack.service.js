'use strict';

import { SlackOAuthClient } from 'messaging-api-slack';
import { slackConfig } from '../../config/slack';
import {RconService} from "./rcon.service";

class SlackServiceClass {
	constructor() {
		this._rcon = RconService;
	}

	listen() {
		if (slackConfig.enabled) {
			this._slack = new SlackOAuthClient({ accessToken: slackConfig.token });
			this._registerEvents();
		}
	}

	_registerEvents() {
		this._rcon.getEmitter().on('newPlayer', (player) => {
			this._send(`*${player}* has connected to ${slackConfig.serverName}`);
		});
		this._send(`Server *${slackConfig.serverName}* is online!`);
	}

	/** @param {string} message */
	_send(message) {
		this._slack
			.callMethod('chat.postMessage', { channel: slackConfig.channel, text: message })
			.catch(error => {
				console.error(`Cannot send message to Slack: ${error.toString()}`);
			});
	}
}

export const SlackService = new SlackServiceClass();
