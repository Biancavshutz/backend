const express = require("express");
const router = express.Router();
const visaoController = require("../controller/visaoAlocacaoController");

router.get('/:id', visaoController.getVisaoById);

module.exports = router;