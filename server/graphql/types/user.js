const {
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLID
} = require('graphql')

// Schema for a user
module.exports = new GraphQLObjectType({
  name: 'user',
  fields: {
    id: {
      type: GraphQLID,
      resolve: ({ _id }) => _id
    },
    firstName: {
      type: GraphQLString
    },
    lastName: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    },
    password: {
      type: GraphQLBoolean
    }
  }
})
