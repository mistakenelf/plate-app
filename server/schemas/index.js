const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} = require("graphql");

const PlateType = require("./Plate");
const UserType = require("./User");
const PlateModel = require("../models/Plate");

const query = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    plates: {
      type: new GraphQLList(PlateType),
      resolve: () => PlateModel.find()
    },
    users: {
      type: new GraphQLList(UserType),
      resolve: () => "Hello"
    }
  })
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Function to insert data",
  fields: () => ({
    addPlate: {
      type: PlateType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        description: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (root, { name, description }) => {
        var newPlate = new PlateModel({ name: name, description: description });

        return new Promise((resolve, reject) => {
          newPlate.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: query,
  mutation: Mutation
});
