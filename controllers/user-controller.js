const { where } = require("sequelize");

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
} = require("../schemas/userValidation-schemas");

//TODO: Have to Store Password in Hashed Value in Database

//==============User SignUp / Create User Function ========================================
const createUser = async (req, res, next) => {
  try {
    const mailExist = await models.Users.findOne({
      where: { email: req.body.email },
    });

    const user = {
      email: req.body.email,
      password: req.body.password,
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
              email: req.body.email,
              password: hashPassword,
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
    const err = new HttpError("Something Went Wrong", 500);
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
          "User Credentials Filed User Email Doesn't Exist",
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
              },
              "something something",
              {
                expiresIn: 86400, // expires in 24 hours
              },

              (err, token) => {
                console.log(token);
                res.status(200).json({
                  message: "User Logged In Successfully",
                  token: token,
                  user: user,
                });
              }
            );
          } else {
            const err = new HttpError(
              "User Credentials Filed User Password Didn't Matched",
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

// Show Single User
const showUser = async (req, res) => {
  try {
    const uid = req.params.uid;

    await models.Users.findByPk(uid).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    const err = new HttpError("Something Went Wrong", 500);
    return next(err);
  }
};

//Show all User
const showAllUsers = async (req, res) => {
  try {
    await models.Users.findAll().then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    const err = new HttpError("Something Went Wrong", 500);
    return next(err);
  }
};

//User Update Address Method
const updateUserAddress = async (req, res, next) => {
  try {
    const uid = req.params.uid;

    const userAddressData = {
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode,
    };

    console.log(userAddressData.phoneNumber);

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
        console.log(userAddressData.phoneNumber);
        res.status(200).json({
          message: "User Address Updated Successfully",
          user: result,
        });
      }
    );
  } catch (error) {
    const err = new HttpError("Something Went Wrong", 500);
    return next(err);
  }
};

const updateUserPassword = async (req, res) => {
  try {
    const oldUserPass = req.body.oldPassword;
    const uid = req.params.uid;

    const userData = {
      password: req.body.newPassword,
    };

    await models.Users.update(userData, {
      where: { id: uid, password: oldUserPass },
    }).then((result) => {
      res.status(200).json({
        message: "User's Password Updated Successfully",
        user: result,
      });
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  showUser,
  showAllUsers,
  updateUserAddress,
  updateUserPassword,
  userLogin,
};
