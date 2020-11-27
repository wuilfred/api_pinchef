'use strict'
const express = require('express');
const api = express.Router();

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
