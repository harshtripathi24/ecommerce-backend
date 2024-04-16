const express = require("express");

const checkAuth = require("../middleware/check-auth");

const reviewController = require("../controllers/review-controller");

const router = express.Router();

router.post("/add-review", checkAuth, reviewController.createReview);

router.patch("/update/:reviewId", checkAuth, reviewController.UpdateReview);

router.delete("/delete/:reviewId", checkAuth, reviewController.deleteReview);

module.exports = router;
