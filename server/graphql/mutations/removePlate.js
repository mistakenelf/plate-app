const {
  GraphQLNonNull,
  GraphQLID
} = require("graphql");

const PlateModel = require("../../models/Plate");
const PlateType = require("../types/Plate");

module.exports = {
  name: "removePlate",
  type: PlateType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, { id }) {
    return PlateModel.findByIdAndRemove(id);
  }
};
