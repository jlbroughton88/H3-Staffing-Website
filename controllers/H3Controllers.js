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
  connection.query(`INSERT INTO users (uid, email, given_name, family_name, nickname) VALUES ("2342356", "jlbroughton88@gmail.com", "Jacob", "Broughton", "jlbroughton88")` , 
   (err, rows, fields) => {
      if (err) throw err;
   }
  )
}

exports.FIND_USER = (req, res) => {
   console.log("finding user from controller")
   connection.query(`SELECT * FROM users WHERE email = "${req.params.email}"`, 
      (err, rows, fields) => {
         if (err) throw err;
         res.send(rows[0]);
      }
   )
}; 

exports.ADD_USER = (req, res) => {
   console.log("adding user from controller")
   connection.query(`INSERT INTO users (uid, email, given_name, family_name, nickname) VALUES ("${req.params.uid}", "${req.params.email}", "${req.params.given_name}", "${req.params.family_name}", "${req.params.nickname}")`, 
      (err, rows, fields) => {
         if (err) throw err;
      }
   )
};

exports.ADD_NAME = (req, res) => {
   console.log("adding name from controller")
   connection.query(`UPDATE users SET first_name="${req.params.first}", last_name="${req.params.last}" WHERE email = "${req.params.email}"`, 
      (err, rows, fields) => {
         if (err) throw err; 
      }
   )
};