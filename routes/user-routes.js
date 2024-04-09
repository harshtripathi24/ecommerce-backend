const express = require("express");

const userController = require("../controllers/user-controller");

const router = express.Router();

router.post("/signup", userController.createUser);
router.post("/login", userController.userLogin);
router.get("/show-user/:uid", userController.showUser);
router.get("/show-all", userController.showAllUsers);
router.patch("/update-address/:uid", userController.updateUserAddress);

module.exports = router;
