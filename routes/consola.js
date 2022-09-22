const express = require('express');
const router = express.Router();
const consolaController= require('../controllers/consola')
//Create,Read,Update,Delete  (CRUD)  Altas Bajas Cambios Consultas
//Servicio para mostrar el formulario
router.get('/examen/formulario',consolaController.getAltaConsola);
//Servicio para procesar los datos del formulario
router.post('/examen/validacion',consolaController.postAltaConsola);
//Serviso para consultar todos los datos
router.get('/consultaConsola',consolaController.getConsultaConsola);

module.exports = router


