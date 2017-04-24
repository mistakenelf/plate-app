const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const env = require('../../../env-config')

const loginTypeDef = `
  extend type Mutation {
    login(username: String, password: String): String
  }
`

const loginResolvers = {
  Mutation: {
    login: async ({ db }, { username, password }) => {
      const user = await db.collection('users').findOne({ username: username })
      if (user) {
        const found = bcrypt.compareSync(password, user.password)
        if (found) {
          const token = jwt.sign(user, env.JWT_SECRET, {
            expiresIn: 60 * 60 * 24
          })
          return token
        }
      }
    }
  }
}

module.exports = {
  loginTypeDef,
  loginResolvers
}
