const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Favorite', schema);