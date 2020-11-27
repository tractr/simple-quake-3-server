'use strict';

const Router = require('express').Router;
const controller = require('./maps.controller');

let router = new Router();

router.get('/', controller.index);
router.post('/', controller.setMap);

module.exports = router;
