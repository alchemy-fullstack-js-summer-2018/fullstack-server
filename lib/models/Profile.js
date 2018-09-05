const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { RequiredString } = require('./required-types');

const schema = new Schema({
    name: RequiredString,
    avatar: {
        type: String,
        default: 'https://i.imgur.com/ChAFdeZ.png'
    },
    location: {
        type: String,
        default: ''
    },
    rank: {
        type: String,
        default: 'Captain'
    },
});

module.exports = mongoose.model('Profile', schema);