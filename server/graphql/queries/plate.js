const {
  GraphQLID,
  GraphQLNonNull
} = require('graphql');

const PlateType = require('../types/plate');
const ObjectId = require('mongodb').ObjectId;

// Get info for one plate
module.exports = {
  name: 'plate',
  description: 'Individual plate query',
  type: PlateType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve({ db }, { id }) {
    return db.collection('plates').findOne({ _id: new ObjectId(id) });
  }
};
