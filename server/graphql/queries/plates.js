const { GraphQLList } = require('graphql');

const PlateType = require('../types/plate');

// Query all plates
module.exports = {
  name: 'plates',
  description: 'plates query',
  type: new GraphQLList(PlateType),
  resolve({ db }) {
    return db.collection('plates').find().toArray();
  }
};
