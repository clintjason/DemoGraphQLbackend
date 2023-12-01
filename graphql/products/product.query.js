const { ProductType } = require('./product.typeDef');
const { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLInt } = require("graphql");
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
  type: new GraphQLObjectType({
    name: 'ProductList',
    fields: {
      totalCount: { type: GraphQLInt },
      products: { type: new GraphQLList(ProductType) }
    }
  }),
  description: "Get all products in the database.",
  args: {
    page: { type: GraphQLInt },
    limit: { type: GraphQLInt },
  },
  resolve: async (_parent, args) => {
    try {
      const offset = args.page ? (args.page - 1) * (args.limit || 12) : 0;
      const limit = args.limit || 12;
      const products = await dbConnect.Product.findAll({offset, limit});
      const totalCount = await dbConnect.Product.count();
      return { totalCount, products };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
}

module.exports = {
  getProduct,
  getAllProducts,
}