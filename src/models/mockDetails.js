const mongoose = require('mongoose')

const detailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('details', detailsSchema)