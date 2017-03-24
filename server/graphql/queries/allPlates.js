const {
  GraphQLList
} = require("graphql");

const PlateType = require("../types/Plate");

module.exports = {
  name: "allPlates",
  description: "All Plates Query",
  type: new GraphQLList(PlateType),
  resolve({ db }) {
    return db.collection("plates").find().toArray();
  }
};
