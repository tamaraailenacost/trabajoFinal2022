const { CartFile } = require('../models/CartFile');
const data = new CartFile();

/**
 * POST '/' -> crea un carrito vacio.
 * @returns {string} idCart  carrito.
 */
const postCart = (async(req, res) => {
    
    const { object } = req.body;
    try {
        const idCart = await data.save( object);
        console.log(idCart);
        res.json(idCart);
    } catch (error) {
        res.status(500).json(err.message);
        throw new Error
    }
});



/**
 * DELETE '/:id' Vacía un carrito y lo elimina.
 *  @param  { string } id
 */
const deleteProductCart = (async(req, res) => {
    const id = req.params.id
    try {
        check = await data.deleteById(id);
        res.status(200).json({ check })
    } catch (err) {
        res.status(500).json({ error: err.message });
        throw new Error
    }

    
});


/**
 * GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
 * @param  { string} id
 * @return  { object} products
 */
const getProductsCart = ((req, res) => {
    const idCart = req.params.id;
    //console.log(idCart);
    try {
        const found = data.getById(idCart);
        res.status(200).json(mycart)
    } catch (err) {
        res.status(500).json(err.message);
        throw new Error
    }
    
});


/**
 * POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
 * @param  { string } idCart
 * @param  { object } body
 * 
 */
 const postProductsinCart = (async(req, res) => {

    const body = req.body
    const idCart = req.params.id
    try {
        const saved = await data.addProduct( body, idCart)
        if (!saved) {
            res.json(`eL ${idCart} no existe`)
        }
        res.status(200).json(saved)
    } catch (err) {
        res.status(500).json(err.message);
        throw new Error
    }
});



/**
 * DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de
producto
 * @param  {string} id
 * @param  {string} id_prod
 */
 const deleteCart = (async(req, res) => {
    const idCart = req.params.id
    const idProd = req.params.id_prod
    try {
        const deleted = await data.deleteById(idCart, idProd)
        if (!deleted) {
            res.json("no se pudo eliminar el producto")
        } else {
            res.json(mycart, "producto eliminado")
        }
    } catch (err) {
        res.status(500).json(err.message);
        throw new Error
    }
    
});


module.exports = {
    deleteCart,
    deleteProductCart,
    getProductsCart,
    postCart,
    postProductsinCart
}


