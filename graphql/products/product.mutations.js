const { GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLList } = require("graphql");
const { ProductType } = require("./product.typeDef");
const dbConnect = require("../../models/index");
const { getRandomImageURL, getRandomCurrencyCode } = require("../../helpers");
const faker = require('faker');

const createProduct ={
  type: ProductType,
  description: "Adds a new product",
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    imageUrl: { type: GraphQLNonNull(GraphQLString) },
    amount: { type: GraphQLNonNull(GraphQLString) },
    currency: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: async (parent, args) => {
      console.log("The inputs: ", args)
      try {
        const products = await dbConnect.Product.create(args);
        return products; 
      } catch (error) {
        console.log(error)
      }
  }
}

const removeProduct = {
  type: ProductType,
  description: 'Delete a product from the database',
  args: {
    id: { type: GraphQLNonNull(GraphQLInt) },
  },
  resolve: async (parent, { id }) => {
    try {
      const product = await dbConnect.Product.findByPk(id);
      if (!product) {
        throw new Error(`Product with ID ${id} not found`);
      }

      await product.destroy();

      return product;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

const updateProduct = {
  type: ProductType,
  description: 'Update a product',
  args: {
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    amount: { type: GraphQLString },
    currency: { type: GraphQLString },
  },
  resolve: async (parent, { id, name, description, imageUrl, amount, currency },) => {
    try {
      const product = await dbConnect.Product.findByPk(id);
      if (!product) {
        throw new Error(`Product with ID ${id} not found`);
      }

      if (name) {
        product.name = name;
      }

      if (description) {
        product.description = description;
      }

      if (imageUrl) {
        product.imageUrl = imageUrl;
      }

      if (amount) {
        product.amount = amount;
      }

      if (currency) {
        product.currency = currency;
      }

      await product.save();

      return product;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

const removeAllProducts = {
  type: new GraphQLList(ProductType),
  description: 'Remove all products from the database',
  resolve: async (parent, args) => {
    try {
      // Delete all products
      await dbConnect.Product.destroy({ where: {} });

      const products = await dbConnect.Product.findAll();
      return products;

    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

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
        const amount = faker.finance.amount();
        const currency = getRandomCurrencyCode(); 
        const imageUrl = await getRandomImageURL();

        if(!imageUrl) {
          return true;
        }
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
  createProduct,
  removeProduct,
  updateProduct,
  removeAllProducts,
  createMultipleProducts,
}