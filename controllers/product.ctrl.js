const db = require('../models');
const Op = db.Sequelize.Op;
const Products = db.products;

/**
  * Create an Product.
  * @param {*} req request object
  * @param {*} res response object
  * @returns {*} returns an error message with status code 500 and an error object 
  *    {error: [String|Object]} or a response object of the created Product with status code 201
  * */
exports.createProducts = async (req, res, next) => {
  console.log('createProducts');
  console.log(req.body)
  try{
		const result = await Products.create({
      ...req.body,
		})
		return res.status(201).json(result)
	}catch (error) {
		return res.status(500).json({ error: error ? error : new Error('Error Creating Product') })
	}
}

/**
  * Get A List of all Products
  * @param {*} req request object
  * @param {*} res response object
  * @returns {*} returns an error message with status code 500 and an error object 
  *    {error: [String|Object]} or a response array of objects of the requested Products  with status code 200
  * */
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll({order: [['createdAt', 'DESC']]});
    return res.status(200).json(products);
  } catch (error) {
		return res.status(500).json({ error: error ? error : new Error('Could not get your data') })
  }
}

/**
  * Get an Product.
  * @param {*} req request object
  * @param {*} res response object
  * @returns {*} returns an error message with status code 500 and an error object 
  *    {error: [String|Object]} or a response  object of the appointment requested  with status code 200
  * */
exports.getProduct = async (req, res) => {
  try {
    const appointment = await Products.findOne({where: {id: req.params.id}});
    return res.status(200).json(appointment);
  } catch (error) {
		return res.status(500).json({ error: error ? error : new Error('Could not get your data') })
  }
}

/**
  * Search through the Product Dataset
  * @param {*} req request object
  * @param {*} res response object
  * @returns {*} returns an error message with status code 500 and an error object 
  *    {error: [String|Object]} or a response  object of the appointment requested  with status code 200
  * */
exports.searchInProducts = async (req, res) => {
  try {
    const {name, phone, address, sex, age} = req.query;
    const appointment = await Products.findAll({
      order: [['createdAt', 'DESC']],
      where:  {
      [Op.or]: [{
              name: {
                  [Op.like]: `%${name}%`
              }
          },
          {
              description: {
                  [Op.like]: `%${description}%`
              }
          },
          {
              imageUrl: {
                  [Op.like]: `%${imageUrl}%`
              }
          },
          {
              amount: {
                  [Op.like]: `%${amount}%`
              }
          },
          {
              currency: {
                  [Op.like]: `%${currency}%`
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
  * Delete an Product.
  * @param {*} req request object
  * @param {*} res response object
  * @returns {*} returns an error message with status code 500 and an error object 
  *    {error: [String|Object]} or a response  object {message: String} with status code 204
  * */
exports.deleteProduct = async (req, res) => {
	try{
		await Products.destroy({where: {id: req.params.id}})
		return res.status(204).json({message: 'Product Deleted Successfully'})
	}catch(error){
		return res.status(500).json({error: error ? error : new Error('Error Deleting Product')})
	}
}

/**
  * Edit an Product.
  * @param {*} req request object
  * @param {*} res response object
  * @returns {*} returns an error message with status code 500 and an error object 
  *    {error: [String|Object]} or a response  object {message: String} with status code 200
  * */
exports.editProduct = async (req, res) => {
	try{
		await Products.update(req.body,{where: {id: req.params.id}})
		return res.status(200).json({message: 'Product Updated Successfully'})
	}catch(error){
		return res.status(500).json({error: error ? error : new Error('Error Updating Product')})
	}
}