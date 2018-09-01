const express = require('express');
const app = express();
const morgan = require('morgan');
const { handler, api404 } = require('./util/errors');
require('dotenv').config();

//Middleware
app.use(morgan('dev'));
// app.use(express.static('public'));
app.use(express.json());

//Routes
const albums = require('./routes/albums');
app.use('/api', albums);
app.use('/api', api404);

app.use((req, res) => {
    res.sendStatus(404);
});

app.use(handler);

module.exports = app;