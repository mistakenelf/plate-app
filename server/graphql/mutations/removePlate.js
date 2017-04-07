const {
  GraphQLNonNull,
  GraphQLID
} = require('graphql');

const ObjectId = require('mongodb').ObjectId;

const PlateType = require('../types/plate');

// Remove a plate
module.exports = {
  name: 'removePlate',
  type: PlateType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve({ db }, { id }) {
    return db.collection('plates').findOneAndDelete({ _id: new ObjectId(id) });
  }
};
