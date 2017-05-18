const ObjectId = require('mongodb').ObjectId

const removeRecoveredPlateTypeDef = `
  extend type Mutation {
    removeRecoveredPlate(id: ID!): Plate
  }
`

const removeRecoveredPlateResolvers = {
  Mutation: {
    removeRecoveredPlate: async ({ db }, { id }) => {
      const data = await db
        .collection('platesRecovered')
        .findOneAndDelete({ _id: new ObjectId(id) })
      return data.value
    }
  }
}

module.exports = {
  removeRecoveredPlateTypeDef,
  removeRecoveredPlateResolvers
}
