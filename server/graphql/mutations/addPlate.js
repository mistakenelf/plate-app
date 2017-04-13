const {
  GraphQLNonNull,
  GraphQLString
} = require('graphql');

const PlateType = require('../types/plate');

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
    const data = {
      name,
      description,
      thumbnail,
      status: 'New',
      content: 'Welcome to your new plate. Edit this text to get started'
    };

    return db.collection('plates').insert(data);
  }
};
