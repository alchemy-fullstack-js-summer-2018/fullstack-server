const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(express.json());

const favorites = require('./routes/favorites');
const artists = require('./routes/artists');
app.use('/api/favorites', favorites);
app.use('/api/artists', artists);


app.use((req, res) => {
    res.sendStatus(404);
});

module.exports = app;