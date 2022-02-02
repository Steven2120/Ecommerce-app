const ErrorResponse = require("../utils/errorResponse");
const {
  checkIsEmail,
  checkIsAlpha,
  checkIsAlphaNumeric,
} = require("../utils/authMethods");

export const checkIsEmailFunc = (req, res, next) => {
  if (!checkIsEmail(req.body.email)) {
    return next(new ErrorResponse("Must be in email format", 400));
  }
};

export const checkIsAlphaFunc = (req, res, next) => {
  const inComingData = req.body;
  for (key in inComingData) {
    if (key === "firstName" || key === "lastName") {
      if (!checkIsAlpha(inComingData[key])) {
        return next(new ErrorResponse(`${key} can only have characters`, 400));
      }
    }
  }
};

export const checkIsAlphaNumericFunc = (req, res, next) => {
  if (!checkIsAlphaNumeric(req.body.username)) {
    return next(
      new ErrorResponse("Username can only contain characters and numbers", 400)
    );
  }
};
