const fs = require('fs');

class Contenedor {

    /**
     * El constructor recibe un archivo y lo lee, guarda el contenido en temp.
     * @param  {} 'utf8'
     */
    constructor() {
        this.data = './archivo.txt';
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
    save = async(object) => {
        try {
            const read = await fs.readFileSync(this.data, 'utf8');
            this.temp = JSON.parse(read);
            this.temp.push(object);
            await fs.promises.writeFile(this.data, JSON.stringify(this.temp, null, 2));
        } catch (error) {
            console.log(error);
            throw new Error;
        }

    }

    /**
     * Recibe un id y devuelve el objeto con ese id, o null si no está.
     * @param  { number} id
     * @returns {Number} id or NULL.
     */
    getById = (id) => {

        const found = this.temp.find(elemento => {
            return elemento.id === id;
        });
        if (found === undefined) {
            return null;
        }
        return found;
    }

    /**
     * Devuelve un array con los objetos presentes en el archivo.
     * @returns { Object } or NULL.
     */
    getAll = () => {
        return this.temp;
    }


    /**
     * Elimina del archivo el objeto con el id buscado.
     * @param  { number } id
     */
    deleteById = async(id) => {

        try {
            if (!this.getById(id)) {
                return { message: 'no se encuentra el id' };
            }
            const filtered = this.temp.filter(elemento => {
                return elemento.id !== id;
            });
            await fs.promises.writeFile(this.data, JSON.stringify(filtered, null, 2));
            return `${id} fue  eliminado del archivo.`;

        } catch (error) {
            console.log(error);
            throw new Error;
        }

    }


    /**
     * Elimina todos los objetos presentes en el archivo.
     */
    deleteAll = async() => {
        try {
            await fs.promises.writeFile(this.data, [], () => console.log("empty file"));
        } catch (error) {
            console.log(error);
            throw new Error;
        }

    }
}

module.exports = { Contenedor }