const express = require('express');
const router = express.Router();
const Me = require('../models/me')


// get my details
router.get("/", async (req, res) => {
    try {
        const me = await Me.find()
        res.json(me)
    } catch (err) {
        res.send(500).json({ message: err.message })
    }
})

// create my details 
router.post("/", async (req, res) => {
    const me = new Me({
        message: req.body.name,
        status: req.body.status,
        data: {
            name: req.body.name,
            github: req.body.github,
            email: req.body.email,
            mobile: req.body.mobile,
            twitter: req.body.twitter
        }

    })
try {
    const  newMe = await me.save()
    res.status(201).json(newMe)
} catch (err) {
    res.status(400).json({message:err.message})
}
})


module.exports = router;