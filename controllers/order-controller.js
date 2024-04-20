const { where } = require("sequelize");
const HttpError = require("../Utils/http-error");

const models = require("../models");

const Validator = require("fastest-validator");

const orderSchema = require("../schemas/orderValidation-schema");

//=========================Add/Create  Order===========================================================

const createOrder = async (req, res, next) => {
  try {
    const order = {
      orderId: req.body.orderId,
      uid: req.body.uid,
      pid: req.body.pid,
      price: req.body.price,
      quantity: req.body.quantity,
      optionChosen: req.body.optionChosen,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      pincode: req.body.pincode,
      city: req.body.city,
      state: req.body.state,
      status: "Placed",
    };

    const authId = req.userData.id;

    const v = new Validator();

    const validationResponse = v.validate(order, orderSchema.createOrderSchema);

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
    } else if (order.uid !== authId) {
      const err = new HttpError("Forbidden Resource ", 403);
      return next(err);
    } else {
      await models.Orders.create(order).then((order) => {
        res.status(201).json({
          message: "Order Placed Successfully",
          order: order,
        });
      });
    }
  } catch (error) {
    const err = new HttpError("Something went wrong:" + error, 500);
    console.log(error);
    return next(err);
  }
};

//=============================Update Order Status =============================================================================

const updateOrderStatus = async (req, res, next) => {
  try {
    const oid = req.params.oid;

    const orderStatusSchema = {
      status: { type: "string", optional: false, min: 2, max: 100 },
    };

    const order = {
      status: req.body.status,
    };

    const orderExist = await models.Orders.findByPk(oid);

    if (orderExist) {
      const v = new Validator();

      const validationResponse = v.validate(order, orderStatusSchema);

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
      } else {
        await models.Orders.update(order, { where: { id: oid } }).then(
          (order) => {
            res.status(201).json({
              message: "Order Status Updated",
              review: order,
            });
          }
        );
      }
    } else {
      const err = new HttpError("Order  Not Found", 404);
      return next(err);
    }
  } catch (error) {
    const err = new HttpError("Something Went Wrong: " + error, 500);
    next(err);
  }
};

//================================Show All Order By OrderId===================================

const showAllByOrderId = async (req, res, next) => {
  try {
    const orderId = req.body.orderId;

    await models.Orders.findAll({
      where: { orderId: orderId },
      include: {
        model: models.Products,
        attributes: ["id", "name", "author", "img"],
      },
    }).then((orderList) => {
      if (orderList.length > 0) {
        res.status(200).json(orderList);
      } else {
        const err = new HttpError("Orders Not Found", 404);
        return next(err);
      }
    });
  } catch (error) {
    const err = new HttpError("Something went wrong" + error.message);

    next(err);
  }
};

module.exports = {
  createOrder,
  updateOrderStatus,
  showAllByOrderId,
};
