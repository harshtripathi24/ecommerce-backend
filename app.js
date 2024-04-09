const express = require("express");
const app = express();

//Importing Routes

const userRoutes = require("./routes/user-routes");

//Importing Middlewares
const HttpError = require("./Utils/http-error");
const bodyparser = require("body-parser");

app.use(bodyparser.json());

//User Routes
app.use("/api/users", userRoutes);

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
