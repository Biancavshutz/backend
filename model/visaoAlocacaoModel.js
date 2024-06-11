const sqlite3 = require("sqlite3").verbose();
const dbPath = "./infra/projeto.db";

function openDbConnection() {
  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error("Erro ao abrir o banco de dados:", err.message);
    }
  });
  return db;
}

// Função para buscar um professor por ID
function getVisaoById(id, callback) {
    const db = openDbConnection();
    db.get("SELECT * FROM banco WHERE prof_id = ?", [id], (err, row) => {
      db.close();
      callback(err, row);
    });
  }

  module.exports = {
    getVisaoById,
  }