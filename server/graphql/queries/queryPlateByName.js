const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString
} = require("graphql");

const PlateType = require("../types/Plate");

module.exports = {
  name: "plateByName",
  description: "All Plates By Name Query",
  type: new GraphQLList(PlateType),
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve({ db }, { name }) {
    return db.collection("plates").find({ name: name }).toArray();
  }
};
