const {
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLID
} = require("graphql");

const mongodb = require("mongodb");

module.exports = new GraphQLObjectType({
  name: "Plate",
  fields: {
    id: {
      type: GraphQLID,
      resolve: ({ _id }) => new mongodb.ObjectID(_id).toString()
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    thumbnail: {
      type: GraphQLString
    },
    completed: {
      type: GraphQLBoolean
    }
  }
});
