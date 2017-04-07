const {
  GraphQLObjectType,
  GraphQLSchema
} = require('graphql');

// Queries
const AllPlates = require('./queries/allPlates');

// Mutations
const AddPlate = require('./mutations/addPlate');
const RemovePlate = require('./mutations/removePlate');
const CompletePlate = require('./mutations/completePlate');
const EditPlate = require('./mutations/editPlate');
const Register = require('./mutations/register');

// Main Schema
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      AllPlates
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      AddPlate,
      RemovePlate,
      CompletePlate,
      EditPlate,
      Register
    }
  })
});

module.exports = schema;
