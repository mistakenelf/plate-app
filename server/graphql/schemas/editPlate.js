const ObjectId = require('mongodb').ObjectId

const editPlateTypeDef = `
  type Plate {
    id: ID
    name: String
    description: String
    thumbnail: String
    status: String
    content: String
    createdBy: String
  }
  extend type Mutation {
    editPlate(id: ID!, name: String!, description: String!, status: String): Plate
  }
`

const editPlateResolvers = {
  Mutation: {
    editPlate: ({ db }, { id, name, description, status }) => {
      return db
        .collection('plates')
        .findOneAndUpdate(
          { _id: new ObjectId(id) },
          { $set: { name: name, description: description, status: status } }
        )
    }
  },
  Plate: {
    id: ({ _id }) => _id
  }
}

module.exports = {
  editPlateTypeDef,
  editPlateResolvers
}
