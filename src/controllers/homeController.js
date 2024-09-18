const connection = require("../config/database");

const getHomePage = (req, res) => {
  //process data
  //call model
  let users = [];
  // A simple SELECT query
  connection.query("SELECT * FROM Persons p", function (err, results, fields) {
    users = results;
    console.log(">>> check results", results); // results contains rows returned by server
    // res.render("sample.ejs");
    res.send(JSON.stringify(users));
  });
};

module.exports = {
  getHomePage,
};
