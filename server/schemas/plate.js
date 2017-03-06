const {
  GraphQLString,
  GraphQLObjectType,
} = require('graphql');

const Plate = new GraphQLObjectType({
  name: 'Plate',
  description: 'A new plate',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: () => 'Plate Name',
    },
    description: {
      type: GraphQLString,
      resolve: () => 'This is a description of a plate',
    },
  }),
});

module.exports = Plate;
