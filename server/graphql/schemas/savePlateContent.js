const ObjectId = require('mongodb').ObjectId

const savePlateContentTypeDef = `
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
  }
}

module.exports = {
  savePlateContentTypeDef,
  savePlateContentResolvers
}
