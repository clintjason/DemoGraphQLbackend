
module.exports = (sequelize, DataTypes) => {
	const Appointments = sequelize.define(
		"appointments",
		{
      unique_code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      sex: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      appointment_date: {
        type: DataTypes.DATE,
      },
      first_time: {
        type: DataTypes.STRING,
        allowNull: false
      },
      request_date: {
        type: DataTypes.DATE,
      },
      appointment_status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      appointment_time: {
        type: DataTypes.TIME,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      before_appointment: {
        type: DataTypes.STRING,
      },
      after_appointment: {
        type: DataTypes.STRING,
      },
		},
		{timestamps:true}
	)
	return Appointments
}
