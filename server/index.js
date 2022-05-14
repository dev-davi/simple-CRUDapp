const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1988Zza&",
  database: "EmployeeSystem",
});

app.post("/create", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;
  const citizenship = req.body.citizenship;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO Employees (name, age, citizenship, position, wage) VALUES (?, ?, ?, ?, ?)",
    [name, age, citizenship, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted successfully.");
      }
    }
  );
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM Employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Your server is running on port 3001");
});
