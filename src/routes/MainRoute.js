'use strict'
const express = require('express');
const api = express.Router();

/**
 * @apiDefine token jwtToken
 * @apiHeader {String} token jwt Token.
 * @apiHeaderExample {String} Request-Example:
 * { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYwNjU1OTExNSwiZXhwIjoxNjA2NjQ1NTE1fQ.S2nact0nfjqk7Wgyo9yEdA_LoJQhUd9yU7kIq24FbB8" }
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

module.exports = api;
