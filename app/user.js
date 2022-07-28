const express = require('express');
const app = express();
const pool = require('../database/db')


app.get('/login', (req, res) =>  {
    return res.render('user/login');
})

app.get('/register', (req, res) =>  {
    return res.render('user/register');
})

module.exports = app;