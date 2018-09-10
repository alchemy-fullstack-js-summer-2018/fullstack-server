const router = require('express').Router();
const Favorite = require('../models/favorite');

module.exports = router

    .post('/favorites', (req, res, next) => {
        Favorite.create(req.body)
            .then(favorite => res.json(favorite))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        Favorite.find()
            .lean()
            .then(favorites => res.json(favorites))
            .catch(next);
    });