const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString } = require("graphql");
const { GraphQLDateTime } = require('graphql-iso-date');

const ProductType = new GraphQLObjectType({
  name: "Product",
  description:'This represents a product object.',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    imageUrl: { type: GraphQLNonNull(GraphQLString) },
    amount: { type: GraphQLNonNull(GraphQLString) },
    currency: { type: GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLNonNull(GraphQLDateTime) },
    updatedAt: { type: GraphQLNonNull(GraphQLDateTime) },
  })
})

module.exports = { ProductType }