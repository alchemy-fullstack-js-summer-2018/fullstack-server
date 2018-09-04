const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('./required-types');

const schema = new Schema({
    title: RequiredString,
    description: RequiredString,
    imageCount: {
        type: Number,
        required: true,
        min: 1
    }
});

module.exports = mongoose.model('Album', schema);