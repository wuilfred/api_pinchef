'use strict'
const express = require('express');
const api = express.Router();

require('./loginRoute')(api);
//require('./registerRoute')(api);


module.exports = api;
