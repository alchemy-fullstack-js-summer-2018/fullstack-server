const express = require('express');
const app = express();

const { handler, api404 } = require('./util/errors');

app.use('/api', api404);
app.use((req, res) => {
    res.sendStatus(404);
});
app.use(handler);

module.exports = app;