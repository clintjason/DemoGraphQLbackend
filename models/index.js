const {Sequelize}  = require("sequelize");
const dbConfig = require("../config/db.config");

//const sequelize = new Sequelize('AppointmentScheduler', 'user', 'pass', config)

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: 'mysql',

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Product = require('./product.model.js')(sequelize, Sequelize);

module.exports = db;
