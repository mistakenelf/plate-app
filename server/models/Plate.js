const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlateSchema = new Schema({
  id: String,
  name: String,
  description: String,
  colorID: String
});

module.exports = mongoose.model("plate", PlateSchema, "plates");
