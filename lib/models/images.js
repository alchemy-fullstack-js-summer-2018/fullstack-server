const mongoose = require('mongoose');
const { Schema } = mongoose;

const images = new Schema({
    //your schema model
});

module.exports = mongoose.model('Image', images);
