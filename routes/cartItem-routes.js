const express = require("express");

const checkAuth = require("../middleware/check-auth");

const checkAdmin = require("../middleware/check-admin");

const cartItemController = require("../controllers/cartItem-controller");

const router = express.Router();

router.post("/add-item", checkAuth, cartItemController.createCartItem);

router.patch("/update/:itemId", checkAuth, cartItemController.UpdateCartItem);

router.delete("/delete/:itemId", checkAuth, cartItemController.deleteCartItem);

module.exports = router;
