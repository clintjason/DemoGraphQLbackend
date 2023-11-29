const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const { Schema } = require('./graphql');
const productRoutes = require('./routes/product.route.js');

const app = express();

const db = require("./models");

app.use(cors())
/* app.use(helmet({
  crossOriginResourcePolicy: false,
})); */

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/graphql", graphqlHTTP({
  graphiql: true, // provides graphql UI
  schema: Schema, // register the graphql schema
}));

app.use('/api/products', productRoutes);

db.sequelize.sync().then(()=> console.log('DB is ready'));

module.exports = app;