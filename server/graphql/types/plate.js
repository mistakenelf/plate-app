const {
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLID
} = require('graphql');

// Schema for a plate
module.exports = new GraphQLObjectType({
  name: 'plate',
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
