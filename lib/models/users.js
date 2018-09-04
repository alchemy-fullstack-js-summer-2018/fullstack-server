const mongoose = require('mongoose');
const { Schema } = mongoose;

const users = new Schema({
    //your schema model
});

module.exports = mongoose.model('User', users);
