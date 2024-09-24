const connection = require("../config/database");
const { connect } = require("../routes/web");
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
  let { firstName, lastName, address, city, email } = req.body; //Destructuring
  let [results, fields] = await connection.query(
    `INSERT INTO Persons (FirstName, LastName, Address, City, Email) VALUES (?, ?, ?, ?, ?)`,
    [firstName, lastName, address, city, email]
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
const postDeleteUser = async (req, res) => {
  // const userId = req.body.userId;
  // let [results, fields] = await connection.query(
  //   "DELETE FROM Persons WHERE PersonID = ?",
  //   [userId]
  // );
  // console.log(">>> Check results", results);
  res.send("Delete success");
};
const getDeletePage = async (req, res) => {
  let userId = req.params.userId;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userById: user });
};

module.exports = {
  getHomePage,
  postCreateUser,
  getCreateUserPage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  getDeletePage,
};
