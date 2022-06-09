const { Router } = require('express');
const routerCart = Router();
const { isAdmin } = require('./Admin');

const {
    postCart,
    deleteProductCart,
    getProductsCart,
    postProductsinCart,
    deleteCart
} = require('../controllers/api-carrito.js');


routerCart.post('/',isAdmin, postCart);

routerCart.delete('/:id',isAdmin, deleteProductCart);

routerCart.get('/:id/productos',isAdmin, getProductsCart);

routerCart.post('/:id/productos',isAdmin, postProductsinCart);

routerCart.delete('/',isAdmin, deleteCart);



module.exports = routerCart;