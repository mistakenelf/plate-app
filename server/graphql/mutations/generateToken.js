const { GraphQLString } = require('graphql')
const jwt = require('jsonwebtoken')

const env = require('../../../env-config')

// Generate a JWT
module.exports = {
  name: 'generateToken',
  description: 'Generate a new JWT token',
  type: GraphQLString,
  resolve() {
    const token = jwt.sign({}, env.JWT_SECRET)
    return token
  }
}
