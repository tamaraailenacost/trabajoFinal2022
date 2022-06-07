const { Router } = require('express');
const routerCart = Router();


const {
    postCart,
    deleteProductCart,
    getProductsCart,
    postProductsinCart,
    deleteCart
} = require('../controllers/api-products');


routerCart.post('/', postCart);

routerCart.delete('/:id', deleteProductCart);

routerCart.get('/:id/productos', getProductsCart);

routerCart.post('/:id/productos', postProductsinCart);

routerCart.delete('/', deleteCart);



module.exports = routerCart;