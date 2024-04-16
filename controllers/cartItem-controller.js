const { where } = require("sequelize");
const HttpError = require("../Utils/http-error");

const models = require("../models");

const Validator = require("fastest-validator");

//=========================Add/Create CartItems================================
const createCartItem = async (req, res, next) => {
  try {
    const cartItemSchema = {
      pid: { type: "number", optional: false, min: 1, max: 1000 },
      uid: { type: "number", optional: false, min: 1, max: 1000 },
      quantity: { type: "number", optional: false, min: 1, max: 10 },
    };

    const cartItem = {
      pid: req.body.pid,
      uid: req.body.uid,
      quantity: req.body.quantity,
    };

    const authId = req.userData.id;

    const v = new Validator();

    const validationResponse = v.validate(cartItem, cartItemSchema);

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
    } else if (cartItem.uid !== authId) {
      const err = new HttpError("Forbidden Resource ", 403);
      return next(err);
    } else {
      await models.CartList.create(cartItem).then((cartItem) => {
        res.status(201).json({
          message: "Added Item To Cart",
          cartItem: cartItem,
        });
      });
    }
  } catch (error) {
    const err = new HttpError("Something went wrong:" + error, 500);

    return next(err);
  }
};

//========================Update Cart Item Method================================

const UpdateCartItem = async (req, res, next) => {
  try {
    const itemId = req.params.itemId;

    const cartItem = {
      quantity: req.body.quantity,
    };

    const cartItemUpdateSchema = {
      quantity: { type: "number", optional: false, min: 1, max: 10 },
    };

    const authId = req.userData.id;

    const cartItemExist = await models.CartList.findByPk(itemId);

    if (cartItemExist) {
      const v = new Validator();

      const validationResponse = v.validate(cartItem, cartItemUpdateSchema);

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
      } else if (cartItemExist.uid !== String(authId)) {
        const err = new HttpError("Forbidden Resource ", 403);
        return next(err);
      } else {
        await models.CartList.update(cartItem, { where: { id: itemId } }).then(
          (cartItem) => {
            res.status(201).json({
              message: "Quantity Updated",
              cartItem: cartItem,
            });
          }
        );
      }
    } else {
      const err = new HttpError("Cart Item Not Found", 404);
      return next(err);
    }
  } catch (error) {
    const err = new HttpError("Something Went Wrong" + error, 500);
    next(err);
  }
};

//========================Delete Cart Item Method================================
const deleteCartItem = async (req, res, next) => {
  try {
    const itemId = req.params.itemId;

    const authId = req.userData.id;

    const cartItemExist = await models.CartList.findByPk(itemId);

    if (cartItemExist) {
      if (cartItemExist.uid !== String(authId)) {
        const err = new HttpError("Forbidden Resource ", 403);
        return next(err);
      } else {
        await models.CartList.destroy({ where: { id: itemId } }).then(
          (cartItem) => {
            res.status(201).json({
              message: "Cart Item Removed",
              cartItem: cartItem,
            });
          }
        );
      }
    } else {
      const err = new HttpError("Cart Item Not Found", 404);
      return next(err);
    }
  } catch (error) {
    const err = new HttpError("Something Went Wrong" + error, 500);
    next(err);
  }
};

//TODO: Create A Show All By UID Method bettor to create after defining association
module.exports = { createCartItem, UpdateCartItem, deleteCartItem };
