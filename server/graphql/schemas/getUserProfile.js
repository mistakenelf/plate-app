const jwt = require('jsonwebtoken')
const env = require('../../../env-config')

const getUserProfileTypeDef = `
  type User {
    id: ID
    firstName: String
    lastName: String
    username: String
    password: String
  }
  extend type Query {
    getUserProfile(token: String): User
  }
`

const getUserProfileResolvers = {
  Query: {
    getUserProfile: ({ db }, { token }) => {
      const user = jwt.decode(token, env.JWT_SECRET)
      return user
    }
  },
  User: {
    id: ({ _id }) => _id
  }
}

module.exports = {
  getUserProfileTypeDef,
  getUserProfileResolvers
}
