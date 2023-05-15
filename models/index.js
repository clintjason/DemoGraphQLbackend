const {Sequelize}  = require("sequelize");
const config = require("../config/db.config");

const sequelize = new Sequelize('AppointmentScheduler', 'user', 'pass', config)

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.appointments = require('./appointment.model.js')(sequelize, Sequelize);

module.exports = db;
