const { GraphQLString } = require('graphql')

const UserType = require('../types/user')

// User login
module.exports = {
  name: 'login',
  description: 'Logs a user in',
  type: UserType,
  args: {
    username: {
      type: GraphQLString
    }
  },
  resolve({ db }, { username }) {
    return db.collection('users').findOne({ username: username })
  }
}
