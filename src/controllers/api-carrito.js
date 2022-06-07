const { CartFile } = require('../models/Contenedor');
const { param } = require('../routers/tester');
const data = new CartFile();

/**
 * POST '/' -> crea un carrito vacio.
 * @returns {string} idCart  carrito.
 */
const postCart = ((req, res) => {
    
    const { products, id } = req.body;
    try {
        const idCart = data.save( products, id);
        console.log(idCart);
        res.json(idCart);
    } catch (error) {
        throw new Error
    }
});


/**
 * DELETE '/:id' Vacía un carrito y lo elimina.
 *  @param  { string } id
 */
const deleteProductCart = ((req, res) => {

    
});


/**
 * GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
 * @param  { string} id
 * @return  { object} products
 */
const getProductsCart = ((req, res) => {
    const idCart = req.params.id;
    console.log(id);
    const found = data.getById(idCart);
    res.json(found);
    
});


/**
 * POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
 * @param  { string } idCart
 * 
 */
 const postProductsinCart = ((req, res) => {

    
});


/**
 * DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de
producto
 * @param  {string} id
 * @param  {string} id_prod
 */
 const deleteCart = ((req, res) => {

    
});


module.exports = {
    deleteCart,
    deleteProductCart,
    getProductsCart,
    postCart,
    postProductsinCart
}


