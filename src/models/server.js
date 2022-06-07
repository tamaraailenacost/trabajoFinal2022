const express = require('express');

//imports
const routerTesting = require('../routers/tester');
const routerProducts = require('../routers/productos');
const routerCart    = require('../routers/carrito');


class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middlewares();
        this.routes();
        this.start();

    }


    middlewares = () => {

        this.app.use(express.json());
        this.app.use(express.static('public'));

    }

    routes = () => {

        this.app.use('/api/testing', routerTesting);
        this.app.use('/api/productos', routerProducts);
        this.app.use('/api/carrito', routerCart);
    }



    start = () => {

        this.app.listen(this.port, () => {

            console.log("servidor corriendo en el puerto,", this.port);
        });
    }


}

module.exports = Server;