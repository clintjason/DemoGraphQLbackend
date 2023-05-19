module.exports = {
	HOST: "db4free.net",
	USER: "drng_user",
	PASSWORD: "l@UoI;XM2",
	DB: "drng_db",
	dialect: "mysql",
	
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 100000
	}
}