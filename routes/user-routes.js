const express = require("express");

const userController = require("../controllers/user-controller");

const router = express.Router();
// Importing MIddlewares

const checkAuth = require("../middleware/check-auth");
const checkAdmin = require("../middleware/check-admin");

//User Routes
router.post("/signup", userController.createUser);
router.post("/login", userController.userLogin);
router.get("/show-user/:uid", checkAuth, userController.showUser);
router.get("/show-all", checkAuth, userController.showAllUsers);
router.patch(
  "/update-address/:uid",
  checkAuth,
  userController.updateUserAddress
);
router.patch(
  "/update-password/:uid",
  checkAuth,
  userController.updateUserPassword
);

router.patch(
  "/make-admin",
  checkAuth,
  checkAdmin,
  userController.makeUserAdmin
);

module.exports = router;
