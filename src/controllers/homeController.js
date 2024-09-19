const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const postCreateUser = (req, res) => {
  let { email, firstName, lastName, city, address } = req.body; //Destructuring
  connection.query(
    `INSERT INTO Persons (LastName, FirstName, Address, City, Email) VALUES (?, ?, ?, ?, ?)`,
    [lastName, firstName, address, city, email],
    function (err, results) {
      res.send("Create user success!!!");
    }
  );
  console.log(">>> req.body", req.body);
};
module.exports = {
  getHomePage,
  postCreateUser,
};
