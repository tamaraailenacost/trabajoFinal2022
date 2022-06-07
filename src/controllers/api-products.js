const { Contenedor } = require('../models/Contenedor');
const data = new Contenedor();


/**
 * GET '/api/productos' -> devuelve todos los productos.
 * @returns { object } products.
 */
const getProducts = ((req, res) => {

    const products = data.getAll();
    console.log(products)
    res.json(products);
});



/**
 * GET '/api/productos/:id' -> devuelve un producto según su id.
 * @param {String} id
 * @returns { object } products.
 */
const getProductId = ((req, res) => {

    const id = req.params.id;
    console.log(id);
    const found = data.getById(id);
    res.json(found);
});



/**
 *  POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id
 * @param  { object } product
 */
const postProducts = ((req, res) => {

    const body = req.body;
    try {
        const product = data.save(body);
        console.log(product);
        res.send({ message: 'se creo el producto' });

    } catch (error) {
        throw new Error
    }

});


/**
 *  PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
 * @param  { string } id
 * @param  { object } body
 */
const putProducts = (async(req, res) => {

    const id = req.params.id;
    const newObj = req.body;
    try {
        const found = await data.deleteById(id);
        console.log(found);
        newObj.id = id;
        await data.save(newObj);
        res.send('los cambios en el id fueron guardados');

    } catch (error) {
        throw new Error;
    }

});



/**
 * DELETE '/api/productos/:id' - > elimina un producto según su id
 * @param  { string } id
 */
const deleteProducts = (async(req, res) => {
    const id = req.params.id;
    deleted = await data.deleteById(id);
    res.send(deleted)

});



module.exports = {

    deleteProducts,
    putProducts,
    getProducts,
    getProductId,
    postProducts
}