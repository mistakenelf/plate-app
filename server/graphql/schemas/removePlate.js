const ObjectId = require('mongodb').ObjectId

const removePlateTypeDef = `
  extend type Mutation {
    removePlate(id: ID!): Plate
  }
`

const removePlateResolvers = {
  Mutation: {
    removePlate: async ({ db }, { id }) => {
      const data = await db
        .collection('plates')
        .findOneAndDelete({ _id: new ObjectId(id) })
      return data.value
    }
  }
}

module.exports = {
  removePlateTypeDef,
  removePlateResolvers
}
