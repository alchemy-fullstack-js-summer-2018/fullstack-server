const mongoose = require('mongoose');
const { Schema } = mongoose;

const user = new Schema({
    //your schema model
});

module.exports = mongoose.model('User', user);
