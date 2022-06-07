const { Router } = require('express');
const routerProducts = Router();


const {
    getProducts,
    getProductId,
    postProducts,
    putProducts,
    deleteProducts
} = require('../controllers/api-products');



routerProducts.get('/', getProducts);


routerProducts.get('/:id', getProductId);


routerProducts.post('/', postProducts);


routerProducts.put('/:id', putProducts);


routerProducts.delete('/:id', deleteProducts);


module.exports = routerProducts;