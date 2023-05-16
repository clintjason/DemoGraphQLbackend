const express = require('express');
const router = express.Router();
const appointmentCtrl = require('../controllers/appointment.ctrl');

router.post('/new', appointmentCtrl.createAppointment);
router.get('/', appointmentCtrl.getAllAppointments);
router.put('/edit/:id', appointmentCtrl.editAppointment);
router.delete('/delete/:id', appointmentCtrl.deleteAppointment);

module.exports = router;
