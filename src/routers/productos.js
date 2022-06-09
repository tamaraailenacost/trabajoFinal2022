const { Router } = require('express');
const routerProducts = Router();
const { isAdmin } = require('./Admin');


const {
    getProducts,
    getProductId,
    postProducts,
    putProducts,
    deleteProducts
} = require('../controllers/api-products');



routerProducts.get('/', getProducts);


routerProducts.get('/:id', getProductId);


routerProducts.post('/',isAdmin, postProducts);


routerProducts.put('/:id',isAdmin, putProducts);


routerProducts.delete('/:id',isAdmin, deleteProducts);


module.exports = routerProducts;