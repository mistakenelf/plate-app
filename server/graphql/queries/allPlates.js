const {
  GraphQLList
} = require("graphql");

const PlateModel = require("../../models/Plate");
const PlateType = require("../types/Plate");

module.exports = {
  name: "allPlates",
  description: "All Plates Query",
  type: new GraphQLList(PlateType),
  resolve() {
    return PlateModel.find();
  }
};
