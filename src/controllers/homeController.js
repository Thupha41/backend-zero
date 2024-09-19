const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

module.exports = {
  getHomePage,
};
