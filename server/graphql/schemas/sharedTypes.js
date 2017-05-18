const sharedTypesTypeDef = `
  type Plate {
    id: ID
    name: String
    description: String
    thumbnail: String
    status: String
    content: String
    createdBy: String
    dateCreated: String
    dateDue: String
    dateDeleted: String
  }
  type User {
    id: ID
    firstName: String
    lastName: String
    username: String
    password: String
    email: String
    plan: String
    dateSignedUp: String
    lastLogin: String
    planStart: String
    planEnd: String
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
