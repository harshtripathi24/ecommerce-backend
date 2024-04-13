const express = require("express");

const productController = require("../controllers/product-controller");

const router = express.Router();

//Middlewares
const checkAuth = require("../middleware/check-auth");
const checkAdmin = require("../middleware/check-admin");
const imagUploader = require("../Utils/image-uploader");

const checkToUpload = (req, res, next) => {
  if ("image") {
    // A file is present, call the upload middleware
    return imagUploader.uploadImage.single("image")(req, res, next);
  } else {
    // No file is present, proceed to the next middleware
    next();
  }
};

//Product Routes

router.get("/show/:pid", checkAuth, productController.showProduct);

router.get(
  "/show-all",
  checkAuth,
  checkAdmin,
  productController.showAllProducts
);

router.post(
  "/add",
  checkAuth,
  checkAdmin,
  imagUploader.uploadImage.single("image"),
  productController.createProduct
);

router.patch(
  "/update/:pid",
  checkAuth,
  checkAdmin,
  checkToUpload,
  productController.updateProduct
);

module.exports = router;
