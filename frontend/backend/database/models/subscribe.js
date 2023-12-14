const mongoose = require('mongoose');

const subScheme = new mongoose.Schema({
    'email':{
        type: String,
        required: true,
        unique: true
    },
    'name':{
        type: String,
    },
    'subbedDate': Date
});

module.exports = mongoose.model('subscribedEmail', subScheme)