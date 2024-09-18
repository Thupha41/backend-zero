const express = require("express");
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const mysql = require("mysql2");
//config template engine
configViewEngine(app);

//test connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3307,
  database: "thupha4141",
  password: "123456",
});

// A simple SELECT query
connection.query("SELECT * FROM Persons p", function (err, results, fields) {
  console.log(">>> check results", results); // results contains rows returned by server
  console.log(">>> check fields", fields); // fields contains extra meta data about results, if available
});

//Khai bao route
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
