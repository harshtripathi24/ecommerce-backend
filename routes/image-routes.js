const express = require("express");

const imageUploader = require("../Utils/image-uploader");

const checkAuth = require("../middleware/check-auth");
const checkAdmin = require("../middleware/check-admin");
const imageController = require("../controllers/image-controller");

const router = express.Router();
router.post(
  "/upload",
  checkAuth,
  checkAdmin,
  imageUploader.uploadImage.single("image"),
  imageController.uploadImage
);

router.delete(
  "/delete/:imgId",
  checkAuth,
  checkAdmin,
  imageController.deleteImage
);

module.exports = router;
