'use strict';

import { handleError, responseWithResult } from '../helpers';
import { RconService } from './rcon.service';

export function command(req, res) {
	RconService.command(req.params.cmd)
		.then(responseWithResult(res))
		.catch(handleError(res));
}

export function randomMap(req, res) {
	RconService.randomMap()
		.then(responseWithResult(res))
		.catch(handleError(res));
}

export function status(req, res) {
	RconService.status().then(responseWithResult(res)).catch(handleError(res));
}

export function serverInfo(req, res) {
	RconService.serverInfo()
		.then(responseWithResult(res))
		.catch(handleError(res));
}

export function setVar(req, res) {
	RconService.setVar(req.body.q3Var, req.body.value)
		.then(responseWithResult(res))
		.catch(handleError(res));
}
