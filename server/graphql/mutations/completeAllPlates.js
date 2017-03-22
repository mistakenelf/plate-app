const {
  GraphQLNonNull,
  GraphQLBoolean
} = require("graphql");

const PlateModel = require("../../models/Plate");
const PlateType = require("../types/Plate");

module.exports = {
  name: "completeAllPlates",
  type: PlateType,
  args: {
    plateCompleted: {
      type: new GraphQLNonNull(GraphQLBoolean)
    }
  },
  resolve(root, { plateCompleted }) {
    return PlateModel.update(
      { completed: false },
      { $set: { completed: plateCompleted } }
    );
  }
};
