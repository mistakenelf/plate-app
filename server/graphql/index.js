const {
  GraphQLObjectType,
  GraphQLSchema
} = require('graphql');

// Queries
const AllPlates = require('./queries/AllPlates');

// Mutations
const AddPlate = require('./mutations/AddPlate');
const RemovePlate = require('./mutations/RemovePlate');
const CompletePlate = require('./mutations/CompletePlate');
const EditPlate = require('./mutations/EditPlate');
const Register = require('./mutations/Register');

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
