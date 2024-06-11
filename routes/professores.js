const express = require("express");
const router = express.Router();
const professorController = require("../controller/professoresController");

router.get('/', professorController.getAllProfessor);

module.exports = router;