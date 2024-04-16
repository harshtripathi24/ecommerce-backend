const express = require("express");

const checkAuth = require("../middleware/check-auth");

const wishItemController = require("../controllers/wishItem-controller");

const router = express.Router();

router.post("/add-item", checkAuth, wishItemController.createWishItem);

router.patch("/update/:itemId", checkAuth, wishItemController.UpdateWishItem);

router.delete("/delete/:itemId", checkAuth, wishItemController.deleteWishItem);

module.exports = router;
