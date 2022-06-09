const fs = require('fs');

class CartFile {

    /**
     * El constructor recibe un archivo y lo lee, guarda el contenido en temp.
     * @param  {} 'utf8'
     */
    constructor() {
        this.data = './archivo2.txt';
        try {
            const file = fs.readFileSync(this.data, 'utf8');
            this.temp = JSON.parse(file);
            //console.log(this.temp);
        } catch (error) {
            console.log(error);
            throw new Error;
        }

    };

    /**
     * Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
     * @param  { Object } object
     * @returns {Number} id
     */
     save = async( body ) => {
        try {
            const all = await data.getAll()
            let cart = {}
            cart.id = all.length + 1
            cart.timestamp = Date.now()
            cart.productos = { body }
            all.push(cart)
            console.log(all)
            fs.promises.writeFile(this.ruta, JSON.stringify(all))
            return cart.id
        } catch (err) {
            console.log("error al escribir el archivo cart.txt")
            throw err
        }

    }

    /**
     * Recibe un id y devuelve el objeto con ese id, o null si no está.
     * @param  { number} id
     * @returns {Number} id or NULL.
     */
     getById = async(idCart) => {
        try {
            const cart = await this.getAll()
            const mycart = cart.find(p => p.id === idCart)
            if (mycart === undefined) {
                return null;
            }
            return mycart

        } catch (err) {
            console.log('error de lectura de achivo cart')
            throw err

        }

    }


    /**
     * Devuelve un array con los objetos presentes en el archivo.
     * @returns { Object } or NULL.
     */
     getAll = async() => {
        
           return this.temp;
    }



    addProduct = async(product, ID) => {

        try {
            const cart = await this.getAll()
            let idcart = parseInt(ID)
            const mycart = cart.find(p => p.id === idcart)
            console.log(mycart)
            if (mycart === undefined) {
                return null;
            }
            mycart.productos = product
                // aca tengo que remplazar el cart 2 por un nuevo cart, sino se duplica
            cart.push(mycart)
            console.log(cart)
            await fs.promises.writeFile(this.ruta, JSON.stringify(cart))
            return true
        } catch (err) {
            console.log("error al escribir el archivo cart.txt")
            throw err
        }

    }

    /**
     * Elimina del archivo el objeto con el id buscado.
     * @param  { number } id
     */
    deleteById  = async(idProd, myCart) => {

        try {
            const found = myCart.forEach(element => console.log(element))
                /*cart.push(mycart)
                console.log(cart)
                await fs.promises.writeFile(this.ruta, JSON.stringify(cart))
                return true*/
        } catch (err) {
            console.log("error al escribir el archivo cart.txt")
            throw err
        }

    }
        


    /**
     * Elimina todos los objetos presentes en el archivo.
     */
    delete = async(ID) => {
        let id = ID
        try {
            const all = await this.getAll();
            const found = all.find(c => c.id === id)
            if (found === undefined) {
                return false
            }
            const filtered = all.filter(c => c.id !== id)
            await fs.promises.writeFile(this.ruta, JSON.stringify(filtered, null, 2))
            return true
        } catch (err) {
            throw err
        }

    }
}

module.exports = { CartFile }