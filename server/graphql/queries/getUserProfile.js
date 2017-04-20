const { GraphQLString } = require('graphql')
const jwt = require('jsonwebtoken')
const env = require('../../../env-config')

const UserType = require('../types/user')

// Query a users profile
module.exports = {
  name: 'getUserProfile',
  description: 'user profile query',
  type: UserType,
  args: {
    token: {
      type: GraphQLString
    }
  },
  resolve({ db }, { token }) {
    const user = jwt.decode(token, env.JWT_SECRET)
    return console.log(user)
  }
}
