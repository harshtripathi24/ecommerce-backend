const jsonwebtoken = require("jsonwebtoken");

const HttpError = require("../Utils/http-error");

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    req.userData = decodedToken;
    next();
  } catch (error) {
    const err = new HttpError("Invalid or Expired Token", 401);
    return next(err);
  }
};

module.exports = checkAuth;
