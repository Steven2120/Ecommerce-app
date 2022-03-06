const jwt = require("jsonwebtoken");
const User = require("../model/User");
const ErrorResponse = require("../utils/errorResponse");

exports.private = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not Authorized to access this route", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_CODE);

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse("No user was found with that id", 404));
    }

    req.user = user;

    next();
  } catch (err) {
    next(new ErrorResponse("Not authorized to access this route", 401));
  }
};
