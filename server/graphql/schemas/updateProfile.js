const jwt = require('jsonwebtoken')
const env = require('../../../env-config')
const ObjectId = require('mongodb').ObjectId

const updateProfileTypeDef = `
  extend type Mutation {
    updateProfile(id: ID, firstName: String, lastName: String, email: String): String
  }
`

const updateProfileResolvers = {
  Mutation: {
    updateProfile: async ({ db }, { id, firstName, lastName, email }) => {
      await db
        .collection('users')
        .updateOne(
          { _id: new ObjectId(id) },
          { $set: { firstName: firstName, lastName: lastName, email: email } }
        )

      const findUser = await db
        .collection('users')
        .findOne({ _id: new ObjectId(id) })

      return jwt.sign(findUser, env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24
      })
    }
  }
}

module.exports = {
  updateProfileTypeDef,
  updateProfileResolvers
}
