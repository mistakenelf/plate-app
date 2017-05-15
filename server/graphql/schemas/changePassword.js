const bcrypt = require('bcrypt')
const ObjectId = require('mongodb').ObjectId

const changePasswordTypeDef = `
  extend type Mutation {
    changePassword(id: ID, password: String): String
  }
`

const changePasswordResolvers = {
  Mutation: {
    changePassword: async ({ db }, { id, password }) => {
      const saltRounds = 10
      const hash = bcrypt.hashSync(password, saltRounds)
      const data = await db
        .collection('users')
        .findOneAndUpdate(
          { _id: new ObjectId(id) },
          { $set: { password: hash } }
        )
      return data
    }
  }
}

module.exports = {
  changePasswordTypeDef,
  changePasswordResolvers
}
