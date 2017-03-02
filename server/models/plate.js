const mongoose = require('mongoose')
const Schema = mongoose.Schema

const plateSchema = new Schema({
  name: String,
  description: String
})

const Plate = mongoose.model('Plate', plateSchema)

module.exports = Plate
