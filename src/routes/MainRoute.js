'use strict'
const express = require('express');
const api = express.Router();

/**
 * @apiDefine token jwtToken
 * @apiHeader {String} token jwt Token.
 * @apiHeaderExample {String} Request-Example:
 * { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU5ODg5MywiZXhwIjoxNjA2Njg1MjkzfQ.I3HSVZBh6WfwwDUPmq24E3LIgaivKkwrHkyA7tKLEzY" }
 *
 */

require('./loginRoute')(api);
//require('./registerRoute')(api);
require('./profileRoute')(api);
require('./postRoute')(api);
require('./likeRoute')(api);
require('./commentRoute')(api);
require('./foodServiceRoute')(api);
require('./reviewRoute')(api);
require('./masterClassRoute')(api);
require('./foodItemRoute')(api);
require('./foodShippingRoute')(api);
require('./cartRoute')(api);
require('./cousineRoute')(api);
require('./dietaryRoute')(api);
require('./chefServiceRoute')(api);
require('./foodStRoute')(api);
require('./locationRoute')(api);

module.exports = api;
