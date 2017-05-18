const moment = require('moment')

const recoverPlateTypeDef = `
  extend type Query {
    recoverPlates(username: String): [Plate]
  }
  extend type Mutation {
    recoverPlate(id: ID, name: String, description: String, thumbnail: String,
      status: String, content: String, createdBy: String): Plate
  }
`

const recoverPlateResolvers = {
  Query: {
    recoverPlates: ({ db }, { username }) => {
      return db
        .collection('platesRecovered')
        .find({ createdBy: username })
        .toArray()
    }
  },
  Mutation: {
    recoverPlate: async (
      { db },
      { name, description, thumbnail, status, content, createdBy }
    ) => {
      const data = {
        name,
        description,
        thumbnail,
        status,
        content,
        createdBy: createdBy,
        dateDeleted: moment().format('MMMM Do YYYY')
      }
      return await db.collection('platesRecovered').insert(data)
    }
  }
}

module.exports = {
  recoverPlateTypeDef,
  recoverPlateResolvers
}
