'use strict';

const Router = require('express').Router;
const controller = require('./rcon.controller');

let router = new Router();

router.get('/status', controller.status);
router.get('/randommap', controller.randomMap);
router.get('/serverinfo', controller.serverInfo);
router.post('/setVar', controller.setVar);

module.exports = router;
