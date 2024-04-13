const express = require("express");
const app = express();

const path = require("path");

//Importing Routes

const userRoutes = require("./routes/user-routes");
const imageRoutes = require("./routes/image-routes");
const productRoutes = require("./routes/product-routes");

const HttpError = require("./Utils/http-error");
const bodyparser = require("body-parser");
require("dotenv").config();

// Using Middlewares
app.use(bodyparser.json());

//Public Route
app.use(
  "/images/product_imgs",
  express.static(path.join("images", "product_imgs"))
);

//User Routes
app.use("/api/users", userRoutes);

//Image Routes
app.use("/api/product-images", imageRoutes);

//Product Routes

app.use("/api/products", productRoutes);

//Invalidating Routes Handler
app.use((req, res, next) => {
  const err = new HttpError("This Route Does Not Exist ", 404);

  next(err);
});

//Global Error Handler Middlewares
app.use((error, req, res, next) => {
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occupied !" });
});

module.exports = app;
