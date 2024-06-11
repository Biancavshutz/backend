const express = require("express");
const router = express.Router();
const salaController = require("../controller/salasController");

router.get('/', salaController.getAllSala);

module.exports = router;