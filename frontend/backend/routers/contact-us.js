const express = require('express');
const router = express.Router();
const contactSchema = require('../database/models/contact-us');

router.get('/contact-us', async (req, res, next) => {
    try {
        let contact = await contactSchema.find();
        res.status(200).json({data : contact});        
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
});

router.post('/contact-us',  async (req, res, next) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;
        let contact = await contactSchema.create({name: name, email: email, message: message, dateTime: Date()});
        res.status(200).json({
            message: 'Sucessfully contacted us!',
            data: contact
        })
    
    } catch (error) {
        res.status(500).json({error: error.message})
    }

})


module.exports = router