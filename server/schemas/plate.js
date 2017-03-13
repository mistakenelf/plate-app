const {
  GraphQLString,
  GraphQLObjectType
} = require("graphql");

const PlateModel = require("../models/plate");

const Plate = new GraphQLObjectType({
  name: "Plate",
  description: "A new plate",
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: () => {
        return PlateModel.findOne({}, "-_id name").then(plate => plate.name);
      }
    },
    description: {
      type: GraphQLString,
      resolve: () => {
        return PlateModel.findOne({}, "-_id description").then(
          plate => plate.description
        );
      }
    }
  })
});

module.exports = Plate;
