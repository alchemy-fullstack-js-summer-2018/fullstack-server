const router = require('express').Router();
// const { HttpError } = require('../util/errors');
const Favorite = require('../models/favorite');

module.exports = router

    .post('/', (req, res, next) => {
        Favorite.create(req.body)
            .then(favorite => res.json(favorite))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        Favorite.find()
            .lean()
            .then(favorites => res.json(favorites))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Favorite.remove({ id: req.params.id })
            .lean()
            .then(favorite => res.json({ removed: !! favorite }))
            .catch(next);
    });