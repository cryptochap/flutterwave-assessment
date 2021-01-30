const express = require('express');
const router = express.Router();
const mockDetails = require('../models/mockDetails')


// get my details
router.get('/', async (req, res) => {
    try {
      const details = await mockDetails.find()
      res.json(details)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

// create my details 
router.post('/', async (req, res) => {
    const details = new mockDetails({
      name: req.body.name,
    })
    try {
      const newDetails = await details.save()
      res.status(201).json(newDetails)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })


module.exports = router;