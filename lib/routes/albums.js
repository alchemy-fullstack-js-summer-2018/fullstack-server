const router = require('express').Router();
const Album = require('../models/Album');

module.exports = router

    .post('/albums', (req, res, next) => {
        Album.create(req.body)
            .then(album => res.json(album))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        Album.find()
            .lean()
            .then(albums => res.json(albums))
            .catch(next);
    });