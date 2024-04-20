const express = require("express");

const checkAuth = require("../middleware/check-auth");
const checkAdmin = require("../middleware/check-admin");
const orderController = require("../controllers/order-controller");

const router = express.Router();

router.post("/place-order", checkAuth, orderController.createOrder);

router.patch(
  "/update/:oid",
  checkAuth,
  checkAdmin,
  orderController.updateOrderStatus
);

router.get(
  "/showBy-orderId",
  checkAuth,
  checkAdmin,
  orderController.showAllByOrderId
);

module.exports = router;
