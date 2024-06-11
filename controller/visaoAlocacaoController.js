const Visao = require("../model/visaoAlocacaoModel");

exports.getVisaoById = (req, res) => {
    Visao.getVisaoById(req.params.id, (err, banco) => {
      if (err) {
        res.status(500).send(err);
      } else if (banco) {
        res.json(banco);
      } else {
        res.status(404).send({ message: "Professor não encontrado" });
      }
    });
  };