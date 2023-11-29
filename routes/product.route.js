const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product.ctrl');

router.post('/new', productCtrl.createProducts);
router.get('/', productCtrl.getAllProducts);
router.get('/search', productCtrl.searchInProducts);
router.get('/:id', productCtrl.getProduct);
router.put('/edit/:id', productCtrl.editProduct);
router.delete('/delete/:id', productCtrl.deleteProduct);

module.exports = router;
