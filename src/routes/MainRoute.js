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

module.exports = api;
