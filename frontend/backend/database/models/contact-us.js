const mongoose = require('mongoose');

const contactForm = mongoose.Schema({
    'name':{
        type: String,
        required: true
    },
    'email':{
        type: String,
        required: true
    },
    'message': {
        type: String,
        required: true
    },
    'dateTime': Date
});

module.exports = mongoose.model('Inbox', contactForm)