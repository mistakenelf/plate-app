const addRecoveredPlateTypeDef = `
  extend type Mutation {
    addRecoveredPlate(name: String, description: String, thumbnail: String, status: String, content: String, createdBy: String): Plate
  }
`

const addRecoveredPlateResolvers = {
  Mutation: {
    addRecoveredPlate: async (
      { db },
      { name, description, thumbnail, status, content, createdBy }
    ) => {
      const data = {
        name,
        description,
        thumbnail,
        status,
        content,
        createdBy: createdBy
      }

      await db.collection('plates').insert(data)
      return data
    }
  }
}

module.exports = {
  addRecoveredPlateTypeDef,
  addRecoveredPlateResolvers
}
