const ObjectId = require('mongodb').ObjectId

const updateProfileTypeDef = `
  extend type Mutation {
    updateProfile(id: ID, firstName: String, lastName: String, email: String): User
  }
`

const updateProfileResolvers = {
  Mutation: {
    updateProfile: async ({ db }, { id, firstName, lastName, email }) => {
      const data = await db
        .collection('users')
        .findOneAndUpdate(
          { _id: new ObjectId(id) },
          { $set: { firstName: firstName, lastName: lastName, email: email } }
        )

      return data.value
    }
  }
}

module.exports = {
  updateProfileTypeDef,
  updateProfileResolvers
}
