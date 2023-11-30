const { ProductType } = require('./product.typeDef');
const { GraphQLList, GraphQLNonNull, GraphQLInt } = require("graphql");
const dbConnect = require("../../models/index");

const getProduct = {
  type: ProductType,
  description: "Fetch a product by its ID",
  args: {
    id: { type: GraphQLNonNull(GraphQLInt) },
  },
  resolve: async (parent, args) => {
      try {
        const product = await dbConnect.Product.findByPk(args.id);
        return product;
      } catch (error) {
        console.error(error);
        throw error;
      }
  }
}

const getAllProducts = {
  type: new GraphQLList(ProductType),
  description: "Get all products in the database",
  resolve: async () => {
    try {
      const products = await dbConnect.Product.findAll();
      return products;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = {
  getProduct,
  getAllProducts,
}