const { GraphQLString } = require('graphql')
const jwt = require('jsonwebtoken')

const env = require('../../../env-config')

// Generate a JWT
module.exports = {
  name: 'generateToken',
  description: 'Generate a new JWT token',
  type: GraphQLString,
  args: {
    username: {
      type: GraphQLString
    }
  },
  async resolve({ db }, { username }) {
    if (
      (await db
        .collection('users')
        .find({ username: username })
        .limit(1)
        .count()) === 1
    ) {
      const token = jwt.sign({}, env.JWT_SECRET)
      return token
    } else {
      console.log('not found')
    }
  }
}
