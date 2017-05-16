const recoverPlateTypeDef = `
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
    recoverPlate(id: ID, name: String, description: String, thumbnail: String,
                 status: String, content: String, createdBy: String): Plate
  }
`

const recoverPlateResolvers = {
  Mutation: {
    recoverPlate: async (
      { db },
      { id, name, description, thumbnail, status, content, createdBy }
    ) => {
      const data = {
        id,
        name,
        description,
        thumbnail,
        status,
        content,
        createdBy: createdBy
      }

      await db.collection('platesRecovered').insert(data)
      return data
    }
  },
  Plate: {
    id: ({ _id }) => _id
  }
}

module.exports = {
  recoverPlateTypeDef,
  recoverPlateResolvers
}
