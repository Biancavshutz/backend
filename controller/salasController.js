const Sala = require("../model/salasModel");

exports.getAllSala = (req, res) => {
  Sala.getAllSala((err, sala) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(sala)
    }
  });
};