const express = require('express');
const { getAllExhibitions } = require('../controllers/exhibition.controllers.js');
const router = express.Router()
router.get('/',getAllExhibitions)
console.log("ejecutando desde la ruta exibicion")

module.exports = router


