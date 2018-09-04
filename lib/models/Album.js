const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('./required-types');

const schema = new Schema({
    title: RequiredString,
    description: RequiredString,
    thumbnail: RequiredString
});

module.exports = mongoose.model('Album', schema);