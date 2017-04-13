const { GraphQLObjectType, GraphQLSchema } = require('graphql');

// Queries
const plates = require('./queries/plates');
const plate = require('./queries/plate');

// Mutations
const addPlate = require('./mutations/addPlate');
const removePlate = require('./mutations/removePlate');
const completePlate = require('./mutations/completePlate');
const editPlate = require('./mutations/editPlate');
const register = require('./mutations/register');
const savePlateContent = require('./mutations/savePlateContent');

// Main Schema
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      plates,
      plate
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      addPlate,
      removePlate,
      completePlate,
      editPlate,
      register,
      savePlateContent
    }
  })
});

module.exports = schema;
