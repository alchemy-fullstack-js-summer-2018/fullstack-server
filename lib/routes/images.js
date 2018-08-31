const router = require('express').Router();
const Image = require('../models/Image');
const { getParam, respond } = require('./route-helpers');

module.exports = router
    .param('id', getParam)

    .post('/', respond(
        ({ body }) => Image.create(body)
    ))

    .get('/:id', respond(
        ({ id }) => Image.findById(id).lean()
    ))

    .get('/', respond(
        ({ query }) => {
            return Image.find(query)
                .lean();
        }
    ))

    .delete('/:id', respond(
        ({ id }) => Image.findByIdAndRemove(id)
    ));

