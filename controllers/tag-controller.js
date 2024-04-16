const { where } = require("sequelize");
const HttpError = require("../Utils/http-error");

const models = require("../models");

const Validator = require("fastest-validator");

const createTag = async (req, res, next) => {
  try {
    const tagSchema = {
      tagName: { type: "string", optional: false, min: 3, max: 50 },
      pid: { type: "string", optional: false, min: 1, max: 1000 },
    };

    const tag = {
      tagName: req.body.name,
      pid: req.body.pid,
    };

    const v = new Validator();

    const validationResponse = v.validate(tag, tagSchema);

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
      await models.Tags.create(tag).then((tag) => {
        res.status(201).json({
          message: "Tag Added",
          image: tag,
        });
      });
    }
  } catch (error) {
    const err = new HttpError("Something went wrong:" + error, 500);

    return next(err);
  }
};

//===================Show All Product With Same Tag================================================
const showProductByTagName = async (req, res, next) => {
  try {
    const tag = req.body.tag;

    await models.Tags.findAll({
      where: { tagName: tag },
      include: [models.Products],
    }).then((tag) => {
      if (tag) {
        res.status(200).json(tag);
      } else {
        const err = new HttpError("Tag Not Found", 404);
        return next(err);
      }
    });
  } catch (error) {
    const err = new HttpError("Something went wrong" + error.message);

    next(err);
  }
};
const deleteTag = async (req, res, next) => {
  try {
    const tId = req.params.tId;

    const tag = await models.Tags.findByPk(tId);

    if (tag) {
      await models.Tags.destroy({ where: { id: tId } }).then((result) => {
        res.status(200).json({
          message: "Tag Removed",
          image: result,
        });
      });
    } else {
      const err = new HttpError("Tag Not Found:", 404);

      next(err);
    }
  } catch (error) {
    const err = new HttpError("Something went wrong:" + error, 500);

    next(err);
  }
};

module.exports = { createTag, deleteTag, showProductByTagName };
