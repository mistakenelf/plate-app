const { GraphQLID } = require('graphql')
const ObjectId = require('mongodb').ObjectId

const UserType = require('../types/user')

// Query a users profile
module.exports = {
  name: 'plates',
  description: 'user profile query',
  type: UserType,
  args: {
    id: {
      type: GraphQLID
    }
  },
  resolve({ db, token }, { id }) {
    return db.collection('users').findOne({ _id: new ObjectId(id) })
  }
}
