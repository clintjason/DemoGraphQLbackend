const {Sequelize}  = require("sequelize");
const dbConfig = require("../config/db.config");

//const sequelize = new Sequelize('AppointmentScheduler', 'user', 'pass', config)

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

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

db.appointments = require('./appointment.model.js')(sequelize, Sequelize);

module.exports = db;
