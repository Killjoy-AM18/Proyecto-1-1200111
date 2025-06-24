const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Rutas CRUD
router.get('/', productosController.listar);
router.post('/agregar', productosController.agregar);
router.post('/editar/:id', productosController.editar);
router.get('/eliminar/:id', productosController.eliminar);

module.exports = router;