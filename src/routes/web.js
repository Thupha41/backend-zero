const express = require("express");
const {
  getHomePage,
  postCreateUser,
  getCreateUserPage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  getDeletePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/abc", (req, res) => {
  res.send("check Abc");
});
router.get("/create", getCreateUserPage);
router.get("/update/:userId", getUpdatePage);
router.get("/", getHomePage);
router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
router.get("/delete/:userId", getDeletePage);
router.post("/delete-user", postDeleteUser);
module.exports = router;
