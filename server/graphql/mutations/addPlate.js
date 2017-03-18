const {
  GraphQLNonNull,
  GraphQLString
} = require("graphql");

const PlateModel = require("../../models/Plate");
const PlateType = require("../types/Plate");

module.exports = {
  name: "addPlate",
  description: "Add new plate",
  type: PlateType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: new GraphQLNonNull(GraphQLString)
    },
    colorID: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, { name, description, colorID }) {
    const NewPlate = new PlateModel({
      name,
      description,
      colorID
    });

    return new Promise((resolve, reject) => {
      NewPlate.save((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  }
};
