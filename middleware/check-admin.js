const HttpError = require("../Utils/http-error");

const checkAdmin = (req, res, next) => {
  if (req.userData.isAdmin === true) {
    return next();
  } else {
    const err = new HttpError(
      "You are not authorized to access this route",
      401
    );
    return next(err);
  }
};

module.exports = checkAdmin;
