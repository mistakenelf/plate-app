const ObjectId = require('mongodb').ObjectId

const savePlateContentTypeDef = `
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
    savePlateContent(id: ID!, content: String!): Plate
  }
`

const savePlateContentResolvers = {
  Mutation: {
    savePlateContent: ({ db }, { id, content }) => {
      return db
        .collection('plates')
        .findOneAndUpdate(
          { _id: new ObjectId(id) },
          { $set: { content: content } }
        )
    }
  },
  Plate: {
    id: ({ _id }) => _id
  }
}

module.exports = {
  savePlateContentTypeDef,
  savePlateContentResolvers
}
