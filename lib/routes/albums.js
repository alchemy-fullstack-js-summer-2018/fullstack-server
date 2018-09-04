const router = require('express').Router();
const Album = require('../models/album');
const { getParam, respond } = require('./route-helpers');

module.exports = router

    .param('id', getParam)
  
    .post('/', respond(
        ({ body }) => Album.create(body)
    ))
    
    .get('/:id', respond(
        ({ id }) => Album.findById(id)
            .lean()
            .select('-_id title description')
    ))
    
    .get('/', respond(
        ({ body }) => Album.find(body)
    ))

    .put('/:id', respond(
        ({ id, body }) => Album.updateById(id, body)
    ))
    
    .delete('/:id', respond(
        ({ id }) => Album.findByIdAndRemove(id)
    ));