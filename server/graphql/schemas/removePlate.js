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
    removePlate: ({ db }, { id }) => {
      return db.collection('plates').findOneAndDelete({ _id: new ObjectId(id) })
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
