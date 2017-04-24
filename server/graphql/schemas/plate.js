const ObjectId = require('mongodb').ObjectId

const plateTypeDef = `
  type Plate {
    id: ID
    name: String
    description: String
    thumbnail: String
    status: String
    content: String
    createdBy: String
  }
  extend type Query {
    plate(id: ID): Plate
  }
`

const plateResolvers = {
  Query: {
    plate: ({ db }, { id }) => {
      return db.collection('plates').findOne({ _id: new ObjectId(id) })
    }
  },
  Plate: {
    id: ({ _id }) => _id
  }
}

module.exports = {
  plateTypeDef,
  plateResolvers
}
