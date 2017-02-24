const {
  GraphQLObjectType,
  GraphQLSchema
} = require('graphql')

const PlateType = require('./plate')

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    plate: {
      type: PlateType,
      resolve: () => 'Plate Name'
    }
  })
})

const schema = new GraphQLSchema({
  query
})

module.exports = schema
