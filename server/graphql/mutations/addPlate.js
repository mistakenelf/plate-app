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
    thumbnail: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, { name, description, thumbnail }) {
    const NewPlate = new PlateModel({
      name,
      description,
      thumbnail,
      completed: false
    });

    return new Promise((resolve, reject) => {
      NewPlate.save((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  }
};
