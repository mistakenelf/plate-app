const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString
} = require("graphql");

const PlateModel = require("../../models/Plate");
const PlateType = require("../types/Plate");

module.exports = {
  name: "plateByName",
  description: "All Plates By Name Query",
  type: new GraphQLList(PlateType),
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, { name }) {
    return PlateModel.find({ name: name });
  }
};
