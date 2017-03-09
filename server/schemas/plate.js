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
      resolve: () =>
        PlateModel.find((err, plate) => {
          console.log(plate.name);
        })
    },
    description: {
      type: GraphQLString,
      resolve: () =>
        PlateModel.find((err, plate) => {
          console.log(plate.description);
        })
    }
  })
});

module.exports = Plate;
