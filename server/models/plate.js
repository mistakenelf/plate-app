const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlateSchema = new Schema({
  name: String,
  description: String
});

const PlateModel = mongoose.model("plate", PlateSchema);

module.exports = PlateModel;
