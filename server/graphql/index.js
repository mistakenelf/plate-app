const {
  GraphQLObjectType,
  GraphQLSchema
} = require('graphql');

const addPlate = require('./mutations/addPlate');
const removePlate = require('./mutations/removePlate');
const completePlate = require('./mutations/completePlate');
const allPlates = require('./queries/allPlates');
const platesByName = require('./queries/queryPlateByName');
const editPlate = require('./mutations/editPlate');

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
      editPlate
    }
  })
});

module.exports = schema;
