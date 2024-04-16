const fs = require("fs");
const path = require("path");
const HttpError = require("../Utils/http-error");

const Validator = require("fastest-validator");
const models = require("../models");

const { createProductSchema } = require("../schemas/productValidation-schema");

//======================Create Product Method================================================
const createProduct = async (req, res, next) => {
  try {
    if (req.file && req.file.filename) {
      const product = {
        name: req.body.name,
        price: req.body.price,
        fakePrice: req.body.fakePrice,
        author: req.body.author,
        img: `${process.env.BASE_URL}/images/product_imgs/${req.file.filename}`,
        options: req.body.options,
        shortDesc: req.body.shortDesc,
        longDesc: req.body.longDesc,
      };

      const v = new Validator();

      const validationResponse = v.validate(product, createProductSchema);

      if (validationResponse !== true) {
        //Remove File

        const removeFile = path.join(
          __dirname,
          "..",
          "images",
          "product_imgs",
          req.file.filename
        );
        fs.unlink(removeFile, (err) => {
          if (err) {
            console.log(err);
          }
        });

        //Validation Error Response
        let errorMessage = "";

        validationResponse.map((validationFailed) => {
          errorMessage = errorMessage + validationFailed.message + ` `;
        });

        const err = new HttpError(
          "Validation Failed Because of: " + errorMessage,
          400
        );
        return next(err);
      } else {
        await models.Products.create(product).then((result) => {
          res.status(201).json({
            message: "Product Created Successfully",
            productData: result,
          });
        });
      }
    } else {
      const err = new HttpError("File Not Uploaded try again", 500);

      return next(err);
    }
  } catch (error) {
    console.log(error);
    const err = new HttpError("Something went wrong:" + error, 500);

    return next(err);
  }
};

//========================Show Single Product =========================================================================

const showProduct = async (req, res, next) => {
  try {
    const pid = req.params.pid;
    // ALso giving all the associated image
    await models.Products.findByPk(pid, {
      include: [models.Images, models.Reviews, models.Tags],
    }).then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        const err = new HttpError("Product Not Found", 404);
        return next(err);
      }
    });
  } catch (error) {
    const err = new HttpError("Something Went Wrong: " + error, 500);
    return next(err);
  }
};

//===================================Show All Products =================================================================

const showAllProducts = async (req, res, next) => {
  try {
    await models.Products.findAll().then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    const err = new HttpError("Something Went Wrong" + error, 500);
    return next(err);
  }
};

//=============================Update Product Method======================================

const updateProduct = async (req, res, next) => {
  try {
    const pid = req.params.pid;

    const productExist = await models.Products.findByPk(pid);
    if (!productExist) {
      const err = new HttpError("Product Not Found", 404);
      return next(err);
    } else {
      const product = {
        name: req.body.name,
        price: req.body.price,
        fakePrice: req.body.fakePrice,
        author: req.body.author,
        img: ``,
        options: req.body.options,
        shortDesc: req.body.shortDesc,
        longDesc: req.body.longDesc,
      };

      if (req.file && req.file.filename) {
        product.img = `${process.env.BASE_URL}/images/product_imgs/${req.file.filename}`;
      } else {
        product.img = req.body.img;
      }

      const v = new Validator();

      const validationResponse = v.validate(product, createProductSchema);

      if (validationResponse !== true) {
        //Remove File

        if (req.file && req.file.filename) {
          const removeFile = path.join(
            __dirname,
            "..",
            "images",
            "product_imgs",
            req.file.filename
          );
          fs.unlink(removeFile, (err) => {
            if (err) {
              console.log(err);
            }
          });
        }

        //Error Message for Validation
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
        await models.Products.update(product, { where: { id: pid } }).then(
          (result) => {
            if (req.file && req.file.filename) {
              //Remove Previous file

              const imageArray = productExist.img.split("/");

              console.log(imageArray);

              const imageName = imageArray[imageArray.length - 1];
              console.log(imageName);
              const removeFile = path.join(
                __dirname,
                "..",
                "images",
                "product_imgs",
                imageName
              );
              fs.unlink(removeFile, (err) => {
                if (err) {
                  console.log(err);
                }
              });
            }

            res.status(200).json({
              message: "Product Updated Successfully",
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

//TODO: Create a Delete Product that also delete the Entry form all table

module.exports = { createProduct, showProduct, showAllProducts, updateProduct };
