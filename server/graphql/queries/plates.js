const { GraphQLList, GraphQLString } = require('graphql')

const PlateType = require('../types/plate')

// Query all plates
module.exports = {
  name: 'plates',
  description: 'plates query',
  type: new GraphQLList(PlateType),
  args: {
    username: {
      type: GraphQLString
    }
  },
  resolve({ db }, { username }) {
    return db.collection('plates').find({ createdBy: username }).toArray()
  }
}
