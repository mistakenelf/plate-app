const platesTypeDef = `
  extend type Query {
    plates(username: String): [Plate]
  }
`

const platesResolvers = {
  Query: {
    plates: ({ db }, { username }) => {
      return db.collection('plates').find({ createdBy: username }).toArray()
    }
  }
}

module.exports = {
  platesTypeDef,
  platesResolvers
}
