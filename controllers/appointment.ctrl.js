const db = require('../models');
const Op = db.Sequelize.Op;
const Appointments = db.appointments;

/**
  * Create an Appointment.
  * @param {*} req request object
  * @param {*} res response object
  * @returns {*} returns an error message with status code 500 and an error object 
  *    {error: [String|Object]} or a response object of the created Appointment with status code 201
  * */
exports.createAppointment = async (req, res, next) => {
  console.log('createAppointment');
  console.log(req.body)
  try{
		const result = await Appointments.create({
      ...req.body,
		})
		return res.status(201).json(result)
	}catch (error) {
		return res.status(500).json({ error: error ? error : new Error('Error Creating Appointment') })
	}
}

/**
  * Get A List of all Appointments
  * @param {*} req request object
  * @param {*} res response object
  * @returns {*} returns an error message with status code 500 and an error object 
  *    {error: [String|Object]} or a response array of objects of the requested Appointments  with status code 200
  * */
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointments.findAll();
    return res.status(200).json(appointments);
  } catch (error) {
		return res.status(500).json({ error: error ? error : new Error('Could not get your data') })
  }
}

/**
  * Get an Appointment.
  * @param {*} req request object
  * @param {*} res response object
  * @returns {*} returns an error message with status code 500 and an error object 
  *    {error: [String|Object]} or a response  object of the appointment requested  with status code 200
  * */
exports.getAppointment = async (req, res) => {
  try {
    const appointment = await Appointments.findOne({where: {id: req.params.id}});
    return res.status(200).json(appointment);
  } catch (error) {
		return res.status(500).json({ error: error ? error : new Error('Could not get your data') })
  }
}

/**
  * Search through the Appointment Dataset
  * @param {*} req request object
  * @param {*} res response object
  * @returns {*} returns an error message with status code 500 and an error object 
  *    {error: [String|Object]} or a response  object of the appointment requested  with status code 200
  * */
exports.searchInAppointments = async (req, res) => {
  try {
    const {name, phone, address, sex, age} = req.query;
    const appointment = await Appointments.findAll({where:  {
      [Op.or]: [{
              name: {
                  [Op.like]: `%${name}%`
              }
          },
          {
              phone: {
                  [Op.like]: `%${phone}%`
              }
          },
          {
              address: {
                  [Op.like]: `%${address}%`
              }
          },
          {
              sex: {
                  [Op.like]: `%${sex}%`
              }
          },
          {
              age: {
                  [Op.like]: `%${age}%`
              }
          },
        ]
      }
    });
    console.log(appointment);
    return res.status(200).json(appointment);
  } catch (error) {
		return res.status(500).json({ error: error ? error : new Error('Could not get your data') })
  }
}

/**
  * Delete an Appointment.
  * @param {*} req request object
  * @param {*} res response object
  * @returns {*} returns an error message with status code 500 and an error object 
  *    {error: [String|Object]} or a response  object {message: String} with status code 204
  * */
exports.deleteAppointment = async (req, res) => {
	try{
		await Appointments.destroy({where: {id: req.params.id}})
		return res.status(204).json({message: 'Appointment Deleted Successfully'})
	}catch(error){
		return res.status(500).json({error: error ? error : new Error('Error Deleting Appointment')})
	}
}

/**
  * Edit an Appointment.
  * @param {*} req request object
  * @param {*} res response object
  * @returns {*} returns an error message with status code 500 and an error object 
  *    {error: [String|Object]} or a response  object {message: String} with status code 200
  * */
exports.editAppointment = async (req, res) => {
	try{
		await Appointments.update(req.body,{where: {id: req.params.id}})
		return res.status(200).json({message: 'Appointment Updated Successfully'})
	}catch(error){
		return res.status(500).json({error: error ? error : new Error('Error Updating Appointment')})
	}
}