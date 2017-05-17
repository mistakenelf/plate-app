const sharedTypesTypeDef = `
  type Plate {
    id: ID
    name: String
    description: String
    thumbnail: String
    status: String
    content: String
    createdBy: String
  }
  type User {
    id: ID
    firstName: String
    lastName: String
    username: String
    password: String
    email: String
    plan: String
  }
`

const sharedTypesResolvers = {
  Plate: {
    id: ({ _id }) => _id
  },
  User: {
    id: ({ _id }) => _id
  }
}

module.exports = {
  sharedTypesTypeDef,
  sharedTypesResolvers
}
