const Professor = require("../model/professoresModel");

exports.getAllProfessor = (req, res) => {
  Professor.getAllProfessor((err, professor) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(professor);
    }
  });
};