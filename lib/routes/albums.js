const router = require('express').Router();
const Album = require('../models/album');
const { getParam, respond } = require('./route-helpers');

module.exports = router

    .param('id', getParam)
  
    .post('/', respond(
        ({ body }) => Album.create(body)
    ));