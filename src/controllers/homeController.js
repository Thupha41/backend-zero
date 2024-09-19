const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const postCreateUser = (req, res) => {
  console.log(">>> req.body", req.body);
  res.send("Create new user");
};
module.exports = {
  getHomePage,
  postCreateUser,
};
