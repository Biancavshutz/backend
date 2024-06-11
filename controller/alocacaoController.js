const Alocacao = require("../model/alocacaoModel");

exports.getAllAlocacao = (req, res) => {
  Alocacao.getAllAlocacao((err, alocacao) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(alocacao);
    }
  });
};