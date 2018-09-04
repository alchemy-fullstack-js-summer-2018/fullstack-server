const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('./required-types'); 

const albums = new Schema({
    title: RequiredString,
    description: RequiredString
});

module.exports = mongoose.model('Album', albums);
