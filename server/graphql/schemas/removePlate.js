const ObjectId = require('mongodb').ObjectId

const removePlateTypeDef = `
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
  },
  Plate: {
    id: ({ _id }) => _id
  }
}

module.exports = {
  removePlateTypeDef,
  removePlateResolvers
}
