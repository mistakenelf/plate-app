const ObjectId = require('mongodb').ObjectId

const editPlateTypeDef = `
  extend type Mutation {
    editPlate(id: ID!, name: String!, description: String!, status: String): Plate
  }
`

const editPlateResolvers = {
  Mutation: {
    editPlate: async ({ db }, { id, name, description, status }) => {
      const editedPlate = await db
        .collection('plates')
        .findOneAndUpdate(
          { _id: new ObjectId(id) },
          { $set: { name: name, description: description, status: status } }
        )

      return editedPlate.value
    }
  }
}

module.exports = {
  editPlateTypeDef,
  editPlateResolvers
}
