'use strict';

import { RconService } from './rcon.service';

class ConsoleServiceClass {
	constructor() {
		this._rcon = RconService;
	}

	listen() {
		this._registerEvents();
	}

	_registerEvents() {
		this._rcon.getEmitter().on('newPlayer', (player) => {
			this._log(`*${player}* has connected`);
		});
		this._log(`Server is online!`);
	}

	/** @param {string} message */
	_log(message) {
		console.log(message);
	}
}

export const ConsoleService = new ConsoleServiceClass();
