const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    cover_image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Artist', schema);