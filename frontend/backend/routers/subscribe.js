const express = require('express');
const router = express.Router();
const subSchema = require('../database/models/subscribe');

router.get('/subscribe', async (req, res, next) => {
    try {
        let subData = await subSchema.find();
        res.status(200).json({data : subData});        
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
});

router.post('/subscribe', async (req, res, next) => {
    try{
        const name = req.body.name || 'Unknown User';
        const email = req.body.email;
        const subscribe = await subSchema.create({ name: name, email: email, subbedDate: Date()});
        return res.status(200).json({
            message: "Subscribed!",
            data: subscribe
        });
    }
    catch(err){
        if(err.code === 11000) return res.status(201).json({error: "Email is already subscribed with us."}) 
        return res.status(500).json({error: err});
    }
});

module.exports = router;