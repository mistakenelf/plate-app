const jwt = require('jsonwebtoken')
const env = require('../../../env-config')

const getUserProfileTypeDef = `
  extend type Query {
    getUserProfile(accesstoken: String): User
  }
`

const getUserProfileResolvers = {
  Query: {
    getUserProfile: ({ db }, { accesstoken }) => {
      const user = jwt.decode(accesstoken, env.JWT_SECRET)
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
