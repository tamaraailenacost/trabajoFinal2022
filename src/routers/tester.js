const { Router } = require('express');
const { Contenedor } = require('../models/Contenedor');

const router = Router();
const data = new Contenedor();

router.get('/productos', (req, res) => {
    res.json(data.temp);
});

router.post('/', (req, res) => {
    res.send('Hello World')
});

router.put('/', (req, res) => {
    res.send('Hello World')
});

router.delete('/', (req, res) => {
    res.send('Hello World')
});



module.exports = router;