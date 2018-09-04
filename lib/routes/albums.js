const router = require('express').Router();
const Album = require('../models/Album');
const { getParam, respond } = require('./route-helpers');

module.exports = router

    .param('id', getParam)

    .post('/', respond(
        ({ body }) => Album.create(body)
    ))

    .put('/:id', respond(
        ({ id, body }) => Album.updateById(id, body)
    ))

    .get('/:id', respond(
        ({ id }) => Album.findById(id).lean()
    ))

    .get('/', respond(
        ({ query }) => {
            return Album.find(query)
                .lean()
                .limit(100)
                .select('title description');
        }
    ))

    .delete('/:id', respond(
        ({ id }) => Album.findByIdAndRemove(id)
    ));