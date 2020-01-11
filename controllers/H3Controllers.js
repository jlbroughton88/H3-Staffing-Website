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
   connection.query(`UPDATE users SET given_name="${req.params.given_name}", family_name="${req.params.family_name}" WHERE email = "${req.params.email}"`, 
      (err, rows, fields) => {
         if (err) throw err; 
      }
   )
};

exports.ADD_BLOG_POST = (req, res) => {
   const r = req.body;
   connection.query(`INSERT INTO blog_posts (uid, user_uid, author, title, blog_text, date_created, time_created) VALUES ("${r.uid}", "${r.user_uid}", "${r.author}", "${r.title}", "${r.blog_text}", "${r.date_created}", "${r.time_created}")`, 
      (err, rows, fields) => {
         if(err) throw err;
         console.log("THIS IS COMING FROM CONTROLLER...")
         console.log(rows);
      }
   )
}

exports.GET_BLOG_POSTS = (req, res) => {
   connection.query(`SELECT * FROM blog_posts`, 
      (err, rows, fields) => {
         if(err) throw err;
         res.send(rows);
      }
   )
}