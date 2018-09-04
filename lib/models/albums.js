const mongoose = require('mongoose');
const { Schema } = mongoose;
import { RequiredString } from './required-types'; 

const albums = new Schema({
    title: RequiredString,
    description: RequiredString
});

module.exports = mongoose.model('Thing', albums);
