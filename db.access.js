require('dotenv').config()
module.exports = {
  development: {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialect: 'mysql',
  },
  production: {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialect: 'mysql',
  },
};