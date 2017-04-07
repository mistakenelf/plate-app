const {
  GraphQLList
} = require('graphql');

const PlateType = require('../types/Plate');

// Query all plates
module.exports = {
  name: 'AllPlates',
  description: 'All Plates Query',
  type: new GraphQLList(PlateType),
  resolve({ db }) {
    return db.collection('plates').find().toArray();
  }
};
