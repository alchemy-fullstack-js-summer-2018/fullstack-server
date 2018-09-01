const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    Genre: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true
    },
    Notes: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Album', schema);