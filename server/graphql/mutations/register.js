const { GraphQLNonNull, GraphQLString } = require('graphql')

const bcrypt = require('bcrypt')

const UserType = require('../types/user')

// Register a new user
module.exports = {
  name: 'register',
  description: 'Register A New User',
  type: UserType,
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
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        const data = {
          firstName,
          lastName,
          username,
          password: hash
        }
        return await db.collection('users').insertOne(data)
      })
    }
  }
}
