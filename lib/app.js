const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

const albums = require('./routes/albums');
app.use('/api', albums);

app.use((req, res) => {
    res.sendFile('index.html', { root: '/public' });
});


module.exports = app;