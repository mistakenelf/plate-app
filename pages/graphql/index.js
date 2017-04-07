const {
  GraphQLObjectType,
  GraphQLSchema
} = require('graphql');

// Queries
const allPlates = require('./queries/allPlates');
const platesByName = require('./queries/queryPlateByName');

// Mutations
const addPlate = require('./mutations/addPlate');
const removePlate = require('./mutations/removePlate');
const completePlate = require('./mutations/completePlate');
const editPlate = require('./mutations/editPlate');
const register = require('./mutations/register');

// Main Schema
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      allPlates,
      platesByName
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      addPlate,
      removePlate,
      completePlate,
      editPlate,
      register
    }
  })
});

module.exports = schema;
