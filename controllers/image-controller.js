const fs = require("fs");
const path = require("path");

const Validator = require("fastest-validator");

const HttpError = require("../Utils/http-error");

const models = require("../models");
const { where } = require("sequelize");

//===============Upload/Create Image Methods================================

const upload = async (req, res, next) => {
  try {
    const imageSchema = {
      url: { type: "string", optional: false, min: 20, max: 1000 },
      pid: { type: "string", optional: false, min: 1, max: 1000 },
    };

    if (req.file.filename) {
      const img = {
        url: `${process.env.BASE_URL}/images/product_imgs/${req.file.filename}`,
        pid: req.body.pid,
      };

      const v = new Validator();

      const validationResponse = v.validate(img, imageSchema);

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
        await models.Images.create(img).then((image) => {
          res.status(201).json({
            message: "Image Uploaded Successfully",
            image: image,
          });
        });
      }
    } else {
      const err = new HttpError(
        "Something went wrong Either Image or file doesn't Exist",
        500
      );

      next(err);
    }
  } catch (error) {
    const err = new HttpError("Something went wrong:" + error, 500);

    return next(err);
  }
};

//==============Delete Image Method================================================

const deleteImage = async (req, res, next) => {
  try {
    const imgId = req.params.imgId;

    const image = await models.Images.findByPk(imgId);

    if (image) {
      await models.Images.destroy({ where: { id: imgId } }).then((result) => {
        const imageArray = image.url.split("/");
        const imageName = imageArray[imageArray.length - 1];

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

        res.status(200).json({
          message: "Image Deleted Successfully",
          image: result,
        });
      });
    } else {
      const err = new HttpError("Image Not Found ", 404);

      return next(err);
    }
  } catch (error) {
    const err = new HttpError("Something went wrong:" + error, 500);

    return next(err);
  }
};

module.exports = { uploadImage: upload, deleteImage: deleteImage };
