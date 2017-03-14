const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLID
} = require("graphql");

const Plate = new GraphQLObjectType({
  name: "Plate",
  description: "A new plate",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: ({ _id }) => {
        return _id.toString();
      }
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  })
});

module.exports = Plate;
