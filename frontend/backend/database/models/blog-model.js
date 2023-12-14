const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
    {
        'title': {
            type: String,
            required: true,
            unique: true,
        },
        'description':{
            type: String,
            required: true,
            unique: true
        },
        'image':{
            type:String,
            required: true
        },
        'content': {
            type: Buffer,
            required: true
        },
        'createdAt': Date,
    }
);

module.exports = mongoose.model('Blog', blogSchema)

 