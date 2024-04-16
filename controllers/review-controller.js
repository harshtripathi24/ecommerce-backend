const { where } = require("sequelize");
const HttpError = require("../Utils/http-error");

const models = require("../models");

const Validator = require("fastest-validator");

//=========================Add/Create CartItems================================
const createReview = async (req, res, next) => {
  try {
    const reviewSchema = {
      userName: { type: "string", optional: false, min: 3, max: 320 },
      stars: { type: "number", optional: false, min: 1, max: 5 },
      reviewText: { type: "string", optional: true, min: 3, max: 500 },
      pid: { type: "number", optional: false, min: 1, max: 1000 },
      ownerId: { type: "number", optional: false, min: 1, max: 1000 },
    };

    const review = {
      userName: req.body.userName,
      stars: req.body.stars,
      reviewText: req.body.reviewText,
      pid: req.body.pid,
      ownerId: req.userData.id,
    };

    const authId = req.userData.id;

    const v = new Validator();

    const validationResponse = v.validate(review, reviewSchema);

    if (validationResponse !== true) {
      let errorMessage = "";

      validationResponse.map((validationFailed) => {
        errorMessage = errorMessage + validationFailed.message + ` `;
      });

      const err = new HttpError(
        "Validation Failed Because of " + errorMessage,
        400
      );
      return next(err);
    } else if (review.ownerId !== authId) {
      const err = new HttpError("Forbidden Resource ", 403);
      return next(err);
    } else {
      await models.Reviews.create(review).then((review) => {
        res.status(201).json({
          message: "Review Successfully Added",
          review: review,
        });
      });
    }
  } catch (error) {
    const err = new HttpError("Something went wrong:" + error, 500);

    return next(err);
  }
};

//========================Update Review Item Method================================

const UpdateReview = async (req, res, next) => {
  try {
    const reviewId = req.params.reviewId;

    const reviewUpdateSchema = {
      stars: { type: "number", optional: false, min: 1, max: 5 },
      reviewText: { type: "string", optional: true, min: 3, max: 500 },
    };

    const review = {
      stars: req.body.stars,
      reviewText: req.body.reviewText,
    };

    const authId = req.userData.id;

    const reviewExist = await models.Reviews.findByPk(reviewId);

    if (reviewExist) {
      const v = new Validator();

      const validationResponse = v.validate(review, reviewUpdateSchema);

      if (validationResponse !== true) {
        let errorMessage = "";

        validationResponse.map((validationFailed) => {
          errorMessage = errorMessage + validationFailed.message + ` `;
        });

        const err = new HttpError(
          "Validation Failed Because of " + errorMessage,
          400
        );
        return next(err);
      } else if (reviewExist.ownerId !== String(authId)) {
        const err = new HttpError("Forbidden Resource ", 403);
        return next(err);
      } else {
        await models.Reviews.update(review, { where: { id: reviewId } }).then(
          (review) => {
            res.status(201).json({
              message: "Your Review Updated",
              review: review,
            });
          }
        );
      }
    } else {
      const err = new HttpError("Review  Not Found", 404);
      return next(err);
    }
  } catch (error) {
    const err = new HttpError("Something Went Wrong" + error, 500);
    next(err);
  }
};

//========================Delete Review Method================================
const deleteReview = async (req, res, next) => {
  try {
    const reviewId = req.params.reviewId;

    const authId = req.userData.id;

    const reviewExist = await models.Reviews.findByPk(reviewId);

    if (reviewExist) {
      if (reviewExist.ownerId !== String(authId)) {
        const err = new HttpError("Forbidden Resource ", 403);
        return next(err);
      } else {
        await models.Reviews.destroy({ where: { id: reviewId } }).then(
          (review) => {
            res.status(201).json({
              message: "Your Review is Deleted",
              review: review,
            });
          }
        );
      }
    } else {
      const err = new HttpError("Review Not Found", 404);
      return next(err);
    }
  } catch (error) {
    const err = new HttpError("Something Went Wrong" + error, 500);
    next(err);
  }
};

//TODO: Create A Show All By UID Method bettor to create after defining association
module.exports = { createReview, UpdateReview, deleteReview };
