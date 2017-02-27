const {
  GraphQLObjectType,
  GraphQLSchema
} = require('graphql')

const PlateType = require('./plate')
const UserType = require('./user')

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    plate: {
      type: PlateType,
      resolve: () => 'Plate Name'
    },
    user: {
      type: UserType,
      resolve: () => 'Tyler Knipfer'
    }
  })
})

const schema = new GraphQLSchema({
  query
})

module.exports = schema