const express = require("express");
const { getHomePage } = require("../controllers/homeController");
const router = express.Router();

router.get("/abc", (req, res) => {
  res.send("check Abc");
});

router.get("/", getHomePage);

module.exports = router;
