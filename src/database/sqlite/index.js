const sqlite3 = require("sqlite3"); //drive que utilizo para se conectar com o banco de dados
const sqlite = require("sqlite"); // banco de dados instalado na aplicação
const path = require("path") // caminho para pegar de forma geral as pastas onde quero salvar od dados do banco de dados


async function sqliteConnection(){
  const database = await sqlite.open({
    filename:path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database
  });

  return database;
}

module.exports = sqliteConnection;