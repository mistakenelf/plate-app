const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlateSchema = new Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("plate", PlateSchema);
