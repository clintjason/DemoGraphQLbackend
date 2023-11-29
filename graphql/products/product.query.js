const { ProductType } = require('./product.typeDef');
const { GraphQLList, GraphQLNonNull, GraphQLInt, GraphQLString } = require("graphql");
const dbConnect = require("../../models/index");
const { getRandomImageURL, getRandomCurrencyCode } = require("../../helpers");
const faker = require('faker');

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

const createMultipleProducts = {
  type: new GraphQLList(ProductType),
  description: 'Create multiple products',
  args: {
    count: { type: GraphQLNonNull(GraphQLInt) },
  },
  resolve: async (parent, { count }) => {
    try {
      const products = [];

      for (let i = 0; i < count; i++) {
        const name = faker.commerce.productName();
        const description = faker.commerce.productDescription();
        const imageUrl = await getRandomImageURL();
        const amount = faker.finance.amount();
        const currency = getRandomCurrencyCode(); 
        const product = await dbConnect.Product.create({
          name,
          description,
          imageUrl,
          amount,
          currency
        });

        products.push(product);
      }

      return products;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};


module.exports = {
  getProduct,
  getAllProducts,
  createMultipleProducts,
}