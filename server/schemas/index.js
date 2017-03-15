const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList
} = require("graphql");

const PlateType = require("./Plate");
const PlateModel = require("../models/Plate");
const Mutation = require("../mutations/mutations");

const Query = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    plates: {
      type: new GraphQLList(PlateType),
      resolve: () => PlateModel.find()
    }
  })
});

module.exports = new GraphQLSchema({
  Query,
  Mutation
});
