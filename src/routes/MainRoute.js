'use strict'
const express = require('express');
const api = express.Router();

/**
 * @apiDefine token jwtToken
 * @apiHeader {String} token jwt Token.
 * @apiHeaderExample {String} Request-Example:
 * { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsImlhdCI6MTYwNzUyOTA1NCwiZXhwIjoxNjA3NjE1NDU0fQ.5t9lQCMPYO38-8uAnYax5c9lVb2s29i6fjeXWJ-jmrM" }
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
require('./chefPositionRoute')(api);
require('./statusOrderRoute')(api);

module.exports = api;
