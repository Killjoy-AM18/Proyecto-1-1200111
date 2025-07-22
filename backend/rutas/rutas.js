const express = require('express');
const router = express.Router();

const areas_trabajoController = require('../controller/areas_trabajoController');
router.get('/', areas_trabajoController.list);
router.post('/', areas_trabajoController.save);
router.delete('/', areas_trabajoController.delete);
router.get('/', areas_trabajoController.edit);
router.post('/', areas_trabajoController.update);

module.exports = router;