const platesTypeDef = `
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
    plates(username: String): [Plate]
  }
`

const platesResolvers = {
  Query: {
    plates: ({ db }, { username }) => {
      return db.collection('plates').find({ createdBy: username }).toArray()
    }
  },
  Plate: {
    id: ({ _id }) => _id
  }
}

module.exports = {
  platesTypeDef,
  platesResolvers
}
