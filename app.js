const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const appointmentRoutes = require('./routes/appointment.route.js');

const app = express();

const db = require("./models");

app.use(cors())
app.use(helmet({
  crossOriginResourcePolicy: false,
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

db.sequelize.sync().then(()=> console.log('DB is ready'));

app.use('/api/appointments', appointmentRoutes);

module.exports = app;