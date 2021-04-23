import http from 'http';
import express from 'express';
import socketio from 'socket.io';

import { default as restConfigurator, config } from '../config/express';
import routes from './index';
import { registerSocket } from './socket';
import { RconService } from './rcon/rcon.service';
import { SlackService } from './rcon/slack.service';
import { DiscordService } from './rcon/discord.service';

export default function runServer() {
	let app = express();
	let server = http.createServer(app);
	restConfigurator(app);
	routes(app);

	const io = socketio(server, { path: '/api/socket.io' });
	io.on('connection', function (socket) {
		registerSocket(RconService.getEmitter(), socket);
	});
	SlackService.listen();
	DiscordService.listen();

	server.listen(config.port, config.ip, function () {
		process.stdout.write(
			`Express Server bound To ${config.host} on port ${config.port}\n`
		);
	});

	return server;
}
