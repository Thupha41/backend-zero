const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const postCreateUser = async (req, res) => {
  let { email, firstName, lastName, city, address } = req.body; //Destructuring
  let [rows, fields] = await connection.query(
    `INSERT INTO Persons (LastName, FirstName, Address, City, Email) VALUES (?, ?, ?, ?, ?)`,
    [lastName, firstName, address, city, email]
  );
  console.log("Check result", rows);
  res.send("Create user success!!!");
};

const getCreatePage = (req, res) => {
  return res.render("register.ejs");
};
module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
};
