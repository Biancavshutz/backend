const express = require("express");
const router = express.Router();
const alocacaoController = require("../controller/alocacaoController");

router.get('/', alocacaoController.getAllAlocacao);

module.exports = router;
