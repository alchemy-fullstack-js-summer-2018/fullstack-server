const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    images: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Artist', schema);