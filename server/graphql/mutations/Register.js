const {
  GraphQLNonNull,
  GraphQLString
} = require('graphql');

const UserType = require('../types/User');

// Register a new user
module.exports = {
  name: 'Register',
  description: 'Register A New User',
  type: UserType,
  args: {
    firstName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    username: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve({ db }, { firstName, lastName, username, password }) {
    const data = {
      firstName,
      lastName,
      username,
      password
    };
    return db.collection('users').insertOne(data);
  }
};
