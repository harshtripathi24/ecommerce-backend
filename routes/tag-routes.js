const express = require("express");

const checkAuth = require("../middleware/check-auth");

const checkAdmin = require("../middleware/check-admin");

const tagController = require("../controllers/tag-controller");

const router = express.Router();

router.post("/add-tag", checkAuth, checkAdmin, tagController.createTag);

router.delete("/delete/:tId", checkAuth, checkAdmin, tagController.deleteTag);

router.get("/show-tag", tagController.showProductByTagName);

module.exports = router;
