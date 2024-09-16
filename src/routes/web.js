const express = require("express");
const router = express.Router();

router.get("/abc", (req, res) => {
  res.send("check Abc");
});

router.get("/", (req, res) => {
  //   res.send("Hello World!!!");
  res.render("sample.ejs");
});

module.exports = router;
