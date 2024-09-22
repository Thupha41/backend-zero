const express = require("express");
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/abc", (req, res) => {
  res.send("check Abc");
});
router.get("/create", getCreatePage);

router.get("/", getHomePage);
router.post("/create-user", postCreateUser);
module.exports = router;
