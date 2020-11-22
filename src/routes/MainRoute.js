'use strict'
const express = require('express');
const api = express.Router();

require('./loginRoute')(api);
//require('./registerRoute')(api);
require('./profileRoute')(api);


module.exports = api;
