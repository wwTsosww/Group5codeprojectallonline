//ท็อป
const express = require('express');
const {register} = require('.././api/registerAPI');
const routes = express.Router();

routes.post('/register', register)


module.exports = routes;