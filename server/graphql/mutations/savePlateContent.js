const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');

const ObjectId = require('mongodb').ObjectId;

const PlateType = require('../types/plate');

// Save Plate Content
module.exports = {
  name: 'savePlateContent',
  type: PlateType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    content: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve({ db }, { id, content }) {
    return db
      .collection('plates')
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { content: content } }
      );
  }
};
