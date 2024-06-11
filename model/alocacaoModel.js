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


function getAllAlocacao(callback) {
  const db = openDbConnection();
  db.all("SELECT * FROM alocacao", [], (err, rows) => {
    db.close();
    callback(err, rows);
  });
}

module.exports = {
  getAllAlocacao,
}