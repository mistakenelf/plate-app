const { GraphQLString } = require('graphql')
const jwt = require('jsonwebtoken')

const env = require('../../../env-config')

const UserType = require('../types/user')

// User login
module.exports = {
  name: 'login',
  description: 'Logs a user in',
  type: GraphQLString,
  args: {
    username: {
      type: GraphQLString
    }
  },
  async resolve({ db }, { username }) {
    const user = await db.collection('users').findOne({ username: username })
    if (user) {
      const token = jwt.sign(user, env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24
      })
      return token
    }
  }
}
