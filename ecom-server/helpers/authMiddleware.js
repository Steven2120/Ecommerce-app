const ErrorMessageHandlerClass = require("../utils/ErrorMessageHandlerClass");

const {
  checkIsEmail,
  checkIsAlpha,
  checkIsAlphaNumeric,
} = require("../utils/authMethods");

exports.checkIsEmailFunc = (req, res, next) => {
  const { errorObj } = res.locals;
  if (!checkIsEmail(req.body.email)) {
    errorObj.wrongEmailFormat = "Must be in email format!";
  }
  next();
};

exports.checkIsAlphaFunc = (req, res, next) => {
  const { errorObj } = res.locals;
  const inComingData = req.body;
  for (key in inComingData) {
    if (key === "firstName" || key === "lastName") {
      if (!checkIsAlpha(inComingData[key])) {
        errorObj[`${key}`] = `${key} can only have characters`;
      }
    }
  }
  next();
};

exports.checkIsAlphaNumericFunc = (req, res, next) => {
  const { errorObj } = res.locals;
  if (!checkIsAlphaNumeric(req.body.username)) {
    errorObj.usernameError = "username can only have characters and numbers";
  }
  next();
};
