const { ContentState, convertToRaw } = require('draft-js')

const addPlateTypeDef = `
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
    addPlate(name: String, description: String, thumbnail: String, createdBy: String): Plate
  }
`

const addPlateResolvers = {
  Mutation: {
    addPlate: ({ db }, { name, description, thumbnail, createdBy }) => {
      const initialContent = JSON.stringify(
        convertToRaw(
          ContentState.createFromText(
            'Edit this content to get started filling your plate'
          )
        )
      )
      const data = {
        name,
        description,
        thumbnail,
        status: 'New',
        content: initialContent,
        createdBy: createdBy
      }

      return db.collection('plates').insert(data)
    }
  },
  Plate: {
    id: ({ _id }) => _id
  }
}

module.exports = {
  addPlateTypeDef,
  addPlateResolvers
}
