const express = require('express');
const app = express();
// AUTH

app.use('/', require('./user')); //1 DAY


module.exports = app;

