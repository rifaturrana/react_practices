const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

app.get("/get", (req, res) => {
  const sqlSelect = "SELECT * FROM posts";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/insert", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const sqlInstert = "INSERT INTO posts (title,description) VALUES (?,?)";
  db.query(sqlInstert, [title, description], (err, result) => {
    console.log(result);
  });
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (username,password) VALUES(?,?)",
    [username, password],
    (err, result) => {
      console.log(err);
    }
  );
});
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        console.log({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "No user found" });
      }
    }
  );
});
app.listen(3002, () => {
  console.log("Yey, your server is running on port 3002");
});
