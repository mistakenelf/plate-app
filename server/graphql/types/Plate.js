const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLID
} = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Plate",
  fields: {
    id: {
      type: GraphQLID,
      resolve({ _id }) {
        return _id.toString();
      }
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    colorID: {
      type: GraphQLString
    }
  }
});
