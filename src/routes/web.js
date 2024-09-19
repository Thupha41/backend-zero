const express = require("express");
const {
  getHomePage,
  postCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/abc", (req, res) => {
  res.send("check Abc");
});

router.get("/", getHomePage);
router.post("/create-user", postCreateUser);
module.exports = router;
