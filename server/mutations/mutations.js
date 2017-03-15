const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require("graphql");

const PlateType = require("../schemas/Plate");
const PlateModel = require("../models/Plate");

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

module.exports = Mutation;
