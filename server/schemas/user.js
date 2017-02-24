const {
  GraphQLString,
  GraphQLObjectType
} = require('graphql')

const User = new GraphQLObjectType({
  name: 'User',
  description: 'A new plate',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: () => 'Tyler Knipfer'
    }
  })
})

module.exports = User
