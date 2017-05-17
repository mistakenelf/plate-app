const ObjectId = require('mongodb').ObjectId

const plateTypeDef = `
  extend type Query {
    plate(id: ID): Plate
  }
`

const plateResolvers = {
  Query: {
    plate: ({ db }, { id }) => {
      return db.collection('plates').findOne({ _id: new ObjectId(id) })
    }
  }
}

module.exports = {
  plateTypeDef,
  plateResolvers
}
