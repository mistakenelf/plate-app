const { GraphQLNonNull, GraphQLString } = require('graphql')
const { ContentState, convertToRaw } = require('draft-js')

const PlateType = require('../types/plate')

// Add a new plate
module.exports = {
  name: 'addPlate',
  description: 'Add new plate',
  type: PlateType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: new GraphQLNonNull(GraphQLString)
    },
    thumbnail: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve({ db }, { name, description, thumbnail }) {
    const initialContent = JSON.stringify(
      convertToRaw(
        ContentState.createFromText(
          'Edit this content to get started filling your plate'
        )
      )
    )
    console.log(initialContent)
    const data = {
      name,
      description,
      thumbnail,
      status: 'New',
      content: initialContent
    }

    return db.collection('plates').insert(data)
  }
}
