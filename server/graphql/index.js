const {
  GraphQLObjectType,
  GraphQLSchema
} = require("graphql");

const addPlate = require("./mutations/addPlate");
const removePlate = require("./mutations/removePlate");
const allPlates = require("./queries/allPlates");

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      allPlates
    }
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: {
      addPlate,
      removePlate
    }
  })
});

module.exports = schema;
