const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('./required-types');

const shortid = require('shortid');

const schema = new Schema({
    name: RequiredString,
    albumId: {
        type: Schema.Types.ObjectId,
        ref: 'Album'
    },
    imageId: {
        type: String,
        default: shortid.generate()
    }
});

module.exports = mongoose.model('Image', schema);