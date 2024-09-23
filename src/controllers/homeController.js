const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../services/CRUDService");
const getHomePage = async (req, res) => {
  let userData = await getAllUsers();
  return res.render("home.ejs", { listUser: userData });
};
const postCreateUser = async (req, res) => {
  let { email, firstName, lastName, city, address } = req.body; //Destructuring
  let [rows, fields] = await connection.query(
    `INSERT INTO Persons (LastName, FirstName, Address, City, Email) VALUES (?, ?, ?, ?, ?)`,
    [lastName, firstName, address, city, email]
  );
  res.send("Create user success!!!");
};

const getCreateUserPage = (req, res) => {
  return res.render("register.ejs");
};

const getUpdatePage = async (req, res) => {
  let userId = req.params.userId;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userById: user });
};

const postUpdateUser = async (req, res) => {
  let { firstName, lastName, address, city, email, userId } = req.body; //Destructuring
  await updateUserById(firstName, lastName, address, city, email, userId);
  res.redirect("/");
};
module.exports = {
  getHomePage,
  postCreateUser,
  getCreateUserPage,
  getUpdatePage,
  postUpdateUser,
};
