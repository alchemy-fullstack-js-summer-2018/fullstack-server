const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('./required-types'); 

const album = new Schema({
    title: RequiredString,
    description: RequiredString
});

module.exports = mongoose.model('Album', album);
