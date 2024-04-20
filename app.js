const express = require("express");
const app = express();

const path = require("path");

//Importing Routes

const userRoutes = require("./routes/user-routes");
const imageRoutes = require("./routes/image-routes");
const productRoutes = require("./routes/product-routes");
const tagRoutes = require("./routes/tag-routes");
const cartItemRoutes = require("./routes/cartItem-routes");
const wishItemRoutes = require("./routes/wishItem-routes");
const reviewRoutes = require("./routes/review-routes");
const orderRoutes = require("./routes/order-routes");

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

//Tag Routes
app.use("/api/tags", tagRoutes);

//Cart Item Routes
app.use("/api/cartList", cartItemRoutes);

//Wish Item Routes
app.use("/api/wishList", wishItemRoutes);

//Review Routes
app.use("/api/reviews", reviewRoutes);

//Order Routes
app.use("/api/orders", orderRoutes);

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
