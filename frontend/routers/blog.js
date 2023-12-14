const express = require('express');
const router = express.Router();
const blogSchema = require('../database/models/blog-model');

const multer = require('multer');
var Storage = multer.memoryStorage()
var upload = multer({
    storage: Storage
});

router.get('/', function (req, res, next) {
    res.json({
        message: 'Knowingly API is up and ready to serve!!!'
    });
    // return
});

router.post('/blog', upload.single('content'), async function (req, res, next) {
    try {
        let title = req.body.title;
        let description = req.body.description;
        let image = req.body.image;
        let content = req.file.buffer;
        const blog = await blogSchema.create({ 'title': title, 'image': image, 'description': description, 'content': content, 'createdAt': Date() });
        res.status(200).json({ data: blog });

    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.get('/latestblogs', async function (req, res) {
    try {
        const blogs = await blogSchema.find().sort({createdAt: -1}).limit(4);
        let newBlogs = []
        for (const blog of blogs) {
            let newBlog = {
                'title': blog.title,
                '_id': blog._id,
                'description': blog.description,
                'image': blog.image,
                // 'content': blog.content.toString('latin1')
                'updatedAt': blog.updatedAt
            }
            newBlogs.push(newBlog)
        }
        res.status(200).json({ data: newBlogs });
    } catch (error) {
        res.status(400).json(error.message)
    }
})
router.get('/blogs', async function (req, res, next) {
    try {
        const searchKey = req.query.searchKey || '(.*?)'
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const offset = (page - 1) * limit;
        const allblogs = await blogSchema.find({title: { $regex: `${searchKey}`, $options: 'i',}}).countDocuments();
        const blogs = await blogSchema.find({title: { $regex: `${searchKey}`, $options: 'i',}}).sort({createdAt: -1}).skip(offset).limit(limit);
        let newBlogs = []
        for (const blog of blogs) {
            let newBlog = {
                'title': blog.title,
                '_id': blog._id,
                'description': blog.description,
                'image': blog.image,
                'content': blog.content.toString('latin1')
            }
            newBlogs.push(newBlog)
        }
        const data = {  }
        data['data'] = newBlogs;
        if (page > 1) data['previous'] = {page: page -1, limit: limit}
        if (offset + limit < allblogs) data['next'] = {page: page + 1, limit: limit} 
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.get('/blog/:id', async function (req, res, next) {
    try {
        const id = req.params.id;
        const blog = await blogSchema.find({ _id: id });
        let newBlog = {
            'title': blog[0].title,
            '_id': blog[0]._id,
            'description': blog[0].description,
            'image': blog[0].image,
            'content': blog[0].content.toString('latin1')
        }
        res.status(200).json({ data: newBlog });
    } catch (error) {
        res.status(400).json(error.message);
    }
});


module.exports = router;