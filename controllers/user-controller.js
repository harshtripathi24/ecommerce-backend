const { where, Model } = require("sequelize");

const Validator = require("fastest-validator");
const models = require("../models");

// Custom Error Constructor
const HttpError = require("../Utils/http-error");

//Importing schemas

const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

const {
  createUserSchema,
  userAddressUpdateSchema,
  updatePasswordSchema,
} = require("../schemas/userValidation-schemas");

//==========================Imports Ends =========================

//==============User SignUp / Create User Function ========================================
const createUser = async (req, res, next) => {
  try {
    const mailExist = await models.Users.findOne({
      where: { email: req.body.email },
    });

    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      isAdmin: false,
    };

    //validator Constructor

    const v = new Validator({
      useNewCustomCheckerFunction: true, // using new version
      messages: {
        // Register our new error message text
        atLeastOneLetter:
          "The password value must contain at least one letter from a-z and A-Z ranges!",
        atLeastOneDigit:
          "The password value must contain at least one digit from 0 to 9!",
      },
    });

    const validationResponse = v.validate(user, createUserSchema);

    //Check User Existence
    if (mailExist) {
      const err = new HttpError(
        "Can't Create Account User Already Exist ",
        409
      );
      return next(err);
    } else if (validationResponse !== true) {
      //Validation Error Response
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
      await bcrypt.genSalt(12, async (err, salt) => {
        await bcrypt.hash(
          req.body.password,
          salt,
          async (err, hashPassword) => {
            const userHashed = {
              name: req.body.name,
              email: req.body.email,
              password: hashPassword,
              isAdmin: false,
            };

            await models.Users.create(userHashed).then((result) => {
              res.status(201).json({
                message: "User Created Successfully",
                userData: result,
              });
            });
          }
        );
      });
    }
  } catch (error) {
    const err = new HttpError("Something Went Wrong" + error, 500);
    return next(err);
  }
};

//========================User Login Functions =============================
const userLogin = async (req, res, next) => {
  try {
    await models.Users.findOne({
      where: { email: req.body.email },
    }).then((user) => {
      if (user === null) {
        const err = new HttpError(
          "User Credentials Failed User Email Doesn't Exist",
          409
        );
        return next(err);
      } else {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (result) {
            const token = jsonwebtoken.sign(
              {
                id: user.id,
                email: user.email,
                isAdmin: user.isAdmin,
              },
              process.env.JWT_SECRET,
              {
                expiresIn: 86400, // expires in 24 hours
              },

              (err, token) => {
                res.status(200).json({
                  message: "User Logged In Successfully",
                  token: token,
                  user: user,
                });
              }
            );
          } else {
            const err = new HttpError(
              "User Credentials Failed User Password Didn't Matched",
              409
            );
            return next(err);
          }
        });
      }
    });
  } catch (error) {
    const err = new HttpError("Something Went Wrong:" + error.message, 500);
    return next(err);
  }
};

//==================== Show Single User Function================================================================

const showUser = async (req, res, next) => {
  try {
    const uid = req.params.uid;

    await models.Users.findByPk(uid, {
      include: [
        {
          model: models.WishList,
          attributes: [
            "createdAt",
            "updatedAt" /* add more attributes as needed */,
          ],
          include: {
            model: models.Products,
            attributes: [
              "id",
              "name",
              "author",
              "price",
              "fakePrice",
              "img",
              "createdAt",
              "updatedAt" /* add more attributes as needed */,
            ],
          },
        },
        {
          model: models.CartList,
          attributes: [
            "createdAt",
            "updatedAt" /* add more attributes as needed */,
          ],
          include: {
            model: models.Products,
            attributes: [
              "id",
              "name",
              "author",
              "price",
              "fakePrice",
              "img",
              "createdAt",
              "updatedAt" /* add more attributes as needed */,
            ],
          },
        },
        {
          model: models.Orders,
          attributes: [
            "pid",
            "price",
            "quantity",
            "phoneNumber",
            "address",
            "pincode",
            "city",
            "state",
            "status",
            "createdAt",
            "updatedAt",
          ],
          include: {
            model: models.Products,
            attributes: [
              "id",
              "name",
              "author",
              "price",
              "fakePrice",
              "img",
              "createdAt",
              "updatedAt" /* add more attributes as needed */,
            ],
          },
        },
      ],
    }).then((result) => {
      if (result) {
        if (String(req.userData.id) === uid) {
          res.status(200).json(result);
        } else {
          const err = new HttpError("Forbidden Resource", 403);
          return next(err);
        }
      } else {
        const err = new HttpError("User Not Found", 404);
        return next(err);
      }
    });
  } catch (error) {
    const err = new HttpError("Something Went Wrong" + error, 500);
    return next(err);
  }
};

//=====================Show all User================================================================

const showAllUsers = async (req, res, next) => {
  try {
    if (req.userData.isAdmin) {
      await models.Users.findAll().then((result) => {
        res.status(200).json(result);
      });
    } else {
      const err = new HttpError("Forbidden Resource", 403);
      return next(err);
    }
  } catch (error) {
    const err = new HttpError("Something Went Wrong", 500);
    return next(err);
  }
};

//======================User Update Address Method===========================
const updateUserAddress = async (req, res, next) => {
  try {
    const uid = req.params.uid;

    const userExist = await models.Users.findByPk(uid);
    if (!userExist) {
      const err = new HttpError("User Not Found", 404);
      return next(err);
    } else {
      const userAddressData = {
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
      };

      if (uid !== String(req.userData.id)) {
        const err = new HttpError(
          "Forbidden Resource Can't Update other user's Info",
          403
        );
        return next(err);
      } else {
        const v = new Validator();

        const validationResponse = v.validate(
          userAddressData,
          userAddressUpdateSchema
        );

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
        }

        await models.Users.update(userAddressData, { where: { id: uid } }).then(
          (result) => {
            res.status(200).json({
              message: "User Address Updated Successfully",
              user: result,
            });
          }
        );
      }
    }
  } catch (error) {
    const err = new HttpError("Something Went Wrong" + error, 500);
    return next(err);
  }
};

//=====================Update User Password Method===========================

const updateUserPassword = async (req, res, next) => {
  try {
    const uid = req.params.uid;

    const userData = {
      oldUserPass: req.body.oldPassword,
      password: req.body.newPassword,
    };

    const v = new Validator({
      useNewCustomCheckerFunction: true, // using new version
      messages: {
        // Register our new error message text
        atLeastOneLetter:
          "The password value must contain at least one letter from a-z and A-Z ranges!",
        atLeastOneDigit:
          "The password value must contain at least one digit from 0 to 9!",
      },
    });

    const validationResponse = v.validate(userData, updatePasswordSchema);

    if (uid !== String(req.userData.id)) {
      const err = new HttpError(
        "Forbidden Resource Can't Update other user's Info",
        403
      );
      return next(err);
    } else if (validationResponse !== true) {
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
      const user = await models.Users.findByPk(uid);

      if (user) {
        await bcrypt.genSalt(12, async (err, salt) => {
          await bcrypt.hash(
            userData.password,
            salt,
            async (err, hashedPassword) => {
              bcrypt.compare(
                userData.oldUserPass,
                user.password,
                async (err, result) => {
                  if (result) {
                    const passwordData = {
                      password: hashedPassword,
                    };

                    await models.Users.update(passwordData, {
                      where: { id: uid },
                    }).then((result) => {
                      res.status(200).json({
                        message: "User's Password Updated Successfully",
                        user: result,
                      });
                    });
                  } else {
                    const err = new HttpError(
                      "User Credentials Failed User Password Didn't Matched",
                      409
                    );
                    return next(err);
                  }
                }
              );
            }
          );
        });
      } else {
        const err = new HttpError("User Not Found", 404);
        return next(err);
      }
    }
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

//======================Make User Admin Method================

const makeUserAdmin = async (req, res, next) => {
  const uid = req.body.id;

  const userExist = await models.Users.findByPk(uid);
  if (!userExist) {
    const err = new HttpError("User Not Found", 404);
    return next(err);
  } else {
    await models.Users.update({ isAdmin: true }, { where: { id: uid } }).then(
      (result) => {
        res.status(200).json({
          message: "User Role Been Updated to Admin",
          user: result,
        });
      }
    );
  }
};

//=======================End Of Methods=========================================

module.exports = {
  createUser,
  showUser,
  showAllUsers,
  updateUserAddress,
  updateUserPassword,
  userLogin,
  updateUserPassword,
  makeUserAdmin,
};
