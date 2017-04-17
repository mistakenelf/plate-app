const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql')

const ObjectId = require('mongodb').ObjectId

const PlateType = require('../types/plate')

// Edit a plates details
module.exports = {
  name: 'editPlate',
  type: PlateType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: new GraphQLNonNull(GraphQLString)
    },
    status: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve({ db }, { id, name, description, status }) {
    return db
      .collection('plates')
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { name: name, description: description, status: status } }
      )
  }
}
