const {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID
} = require("graphql");

const PlateType = require("../types/Plate");

module.exports = {
  name: "completePlate",
  type: PlateType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    completed: {
      type: new GraphQLNonNull(GraphQLBoolean)
    }
  },
  resolve(root, { id, completed }) {
    return console.log(root);
  }
};
