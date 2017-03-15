const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString
} = require("graphql");

const PlateType = require("./plate/PlateType");
const PlateModel = require("./plate/PlateModel");

const query = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    plates: {
      type: new GraphQLList(PlateType),
      resolve: () => PlateModel.find()
    }
  })
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
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
        const NewPlate = new PlateModel({
          name,
          description
        });

        return new Promise((resolve, reject) => {
          NewPlate.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query,
  mutation
});
