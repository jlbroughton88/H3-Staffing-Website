const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
   host: 'localhost',
   user: process.env.DB_USER,
   password: process.env.DB_PASS,
   database: 'h3_staffing_db',
   port: '8889',
});
connection.connect()

exports.test_route = (req, res) => {
  connection.query(`INSERT INTO users (uid, email, first_name, last_name, nickname) values ("2342356", "jlbroughton88@gmail.com", "Jacob", "Broughton", "jlbroughton88")` , 
   (err, rows, fields) => {
      if (err) throw err;
   }
  )
}