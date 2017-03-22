const {
  GraphQLObjectType,
  GraphQLSchema
} = require("graphql");

const addPlate = require("./mutations/addPlate");
const removePlate = require("./mutations/removePlate");
const completeAllPlates = require("./mutations/completeAllPlates");
const allPlates = require("./queries/allPlates");
const platesByName = require("./queries/queryPlateByName");

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      allPlates,
      platesByName
    }
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: {
      addPlate,
      removePlate,
      completeAllPlates
    }
  })
});

module.exports = schema;
