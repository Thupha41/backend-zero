const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");
const getHomePage = async (req, res) => {
  let userData = await getAllUsers();
  console.log(userData);
  return res.render("home.ejs", { listUser: userData });
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

const getCreateUserPage = (req, res) => {
  return res.render("register.ejs");
};
module.exports = {
  getHomePage,
  postCreateUser,
  getCreateUserPage,
};
