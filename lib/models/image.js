const mongoose = require('mongoose');
const { Schema } = mongoose;

const image = new Schema({
    //your schema model
});

module.exports = mongoose.model('Image', image);
