
module.exports = (sequelize, DataTypes) => {
	const Appointments = sequelize.define(
		"appointments",
		{
      unique_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sex: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.TEXT,
      },
      after_appointment: {
        type: DataTypes.TEXT,
      },
		},
		{timestamps:true}
	)
	return Appointments
}
