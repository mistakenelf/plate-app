const {
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLID
} = require('graphql');

// Schema for a plate
module.exports = new GraphQLObjectType({
  name: 'Plate',
  fields: {
    id: {
      type: GraphQLID,
      resolve: ({ _id }) => _id
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    thumbnail: {
      type: GraphQLString
    },
    completed: {
      type: GraphQLBoolean
    }
  }
});
