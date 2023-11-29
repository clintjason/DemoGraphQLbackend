module.exports = {
	HOST: "db4free.net",
	USER: "user_product",
	PASSWORD: "l@UoI;XM2",
	DB: "demo_product_db",
	dialect: "mysql",
	
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 100000
	}
}