const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList
} = require("graphql");

const PlateType = require("./Plate");
const UserType = require("./User");
const PlateModel = require("../models/Plate");
const Mutation = require("../mutations/mutations");

const query = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    plates: {
      type: new GraphQLList(PlateType),
      resolve: () => PlateModel.find()
    },
    users: {
      type: new GraphQLList(UserType),
      resolve: () => "Hello"
    }
  })
});

module.exports = new GraphQLSchema({
  query: query,
  mutation: Mutation
});
