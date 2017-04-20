const { GraphQLString } = require('graphql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const env = require('../../../env-config')

// User login
module.exports = {
  name: 'login',
  description: 'Logs a user in',
  type: GraphQLString,
  args: {
    username: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    }
  },
  async resolve({ db }, { username, password }) {
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
