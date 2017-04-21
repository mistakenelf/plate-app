const { GraphQLNonNull, GraphQLString } = require('graphql')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const env = require('../../../env-config')

// Register a new user
module.exports = {
  name: 'register',
  description: 'Register A New User',
  type: GraphQLString,
  args: {
    firstName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    username: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  async resolve({ db }, { firstName, lastName, username, password }) {
    const duplicateUser = await db
      .collection('users')
      .find({ username: username })
      .count()
    if (duplicateUser !== 1) {
      const saltRounds = 10

      const hash = bcrypt.hashSync(password, saltRounds)

      const data = {
        firstName,
        lastName,
        username,
        password: hash
      }

      await db.collection('users').insertOne(data)
      const newUser = await db
        .collection('users')
        .findOne({ username: username })
      const token = jwt.sign(newUser, env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24
      })

      return token
    }
  }
}
