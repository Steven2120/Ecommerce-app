const ErrorResponse = require("../utils/errorResponse");

export const checkIsUndefinedFunc = (req, res, next) => {
  if (Object.keys(req.body).length === 0)
    return next(new ErrorResponse("Please fill out the the form", 400));
};
