const {
  GraphQLNonNull,
  GraphQLID
} = require('graphql');

const ObjectId = require('mongodb').ObjectId;

const PlateType = require('../types/Plate');

// Remove a plate
module.exports = {
  name: 'RemovePlate',
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
