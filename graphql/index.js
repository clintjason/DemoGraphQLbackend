const {GraphQLObjectType, GraphQLSchema} = require('graphql');
const ProductQueries = require('./products/product.query');
const ProductMutations = require('./products/product.mutations');

// Register Queries on Root Query object
const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'GraphQL Server Root Query Object',
  fields: () => ({
    ...ProductQueries,
  })
})

// Register Mutations on Root Mutation object
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  description: 'GraphQL Server Root Mutation Object',
  fields: () => ({
    ...ProductMutations,
  })
})

// Create Schema Object
const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
})

module.exports = {
  Schema
}