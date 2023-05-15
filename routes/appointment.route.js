const express = require('express');
const router = express.Router();
const appointmentCtrl = require('../controllers/appointment.ctrl');

router.post('/new', appointmentCtrl.createAppointment);
//router.post('/signup', userCtrl.signup);

module.exports = router;
