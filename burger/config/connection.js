const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,
  user: "root",
  password: "Mmasm&a4f6d5!",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  
});
module.exports = connection;
