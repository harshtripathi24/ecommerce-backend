const { where } = require("sequelize");
const HttpError = require("../Utils/http-error");

const models = require("../models");

const Validator = require("fastest-validator");

//=========================Add/Create CartItems================================
const createWishItem = async (req, res, next) => {
  try {
    const wishItemSchema = {
      pid: { type: "number", optional: false, min: 1, max: 1000 },
      uid: { type: "number", optional: false, min: 1, max: 1000 },
      quantity: { type: "number", optional: false, min: 1, max: 10 },
      optionChosen: { type: "string", optional: false, min: 3, max: 100 },
    };

    const wishItem = {
      pid: req.body.pid,
      uid: req.body.uid,
      quantity: req.body.quantity,
      optionChosen: req.body.optionChosen,
    };

    const authId = req.userData.id;

    const v = new Validator();

    const validationResponse = v.validate(wishItem, wishItemSchema);

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
    } else if (wishItem.uid !== authId) {
      const err = new HttpError("Forbidden Resource ", 403);
      return next(err);
    } else {
      await models.WishList.create(wishItem).then((wishItem) => {
        res.status(201).json({
          message: "Added Item To WishList",
          wishItem: wishItem,
        });
      });
    }
  } catch (error) {
    const err = new HttpError("Something went wrong:" + error, 500);

    return next(err);
  }
};

//========================Update Wish Item Method================================

const UpdateWishItem = async (req, res, next) => {
  try {
    const itemId = req.params.itemId;

    const wishItem = {
      quantity: req.body.quantity,
    };

    const wishItemUpdateSchema = {
      quantity: { type: "number", optional: false, min: 1, max: 10 },
    };

    const authId = req.userData.id;

    const wishItemExist = await models.WishList.findByPk(itemId);

    if (wishItemExist) {
      const v = new Validator();

      const validationResponse = v.validate(wishItem, wishItemUpdateSchema);

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
      } else if (wishItemExist.uid !== String(authId)) {
        const err = new HttpError("Forbidden Resource ", 403);
        return next(err);
      } else {
        await models.WishList.update(wishItem, { where: { id: itemId } }).then(
          (cartItem) => {
            res.status(201).json({
              message: "Quantity Updated",
              cartItem: wishItem,
            });
          }
        );
      }
    } else {
      const err = new HttpError("Wish Item Not Found", 404);
      return next(err);
    }
  } catch (error) {
    const err = new HttpError("Something Went Wrong" + error, 500);
    next(err);
  }
};

//========================Delete Wish Item Method================================
const deleteWishItem = async (req, res, next) => {
  try {
    const itemId = req.params.itemId;

    const authId = req.userData.id;

    const wishItemExist = await models.WishList.findByPk(itemId);

    if (wishItemExist) {
      if (wishItemExist.uid !== String(authId)) {
        const err = new HttpError("Forbidden Resource ", 403);
        return next(err);
      } else {
        await models.WishList.destroy({ where: { id: itemId } }).then(
          (wishItem) => {
            res.status(201).json({
              message: "Wish Item Removed",
              wishItem: wishItem,
            });
          }
        );
      }
    } else {
      const err = new HttpError("Wish Item Not Found", 404);
      return next(err);
    }
  } catch (error) {
    const err = new HttpError("Something Went Wrong" + error, 500);
    next(err);
  }
};

//TODO: Create A Show All By UID Method bettor to create after defining association
module.exports = { createWishItem, UpdateWishItem, deleteWishItem };
