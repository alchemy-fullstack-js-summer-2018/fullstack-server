const router = require('express').Router();
const Artist = require('../models/Artist');

module.exports = router

    .post('/artist', (req, res, next) => {
        Artist.create(req.body)
            .then(artist => res.json(artist))
            .catch(next);
    });