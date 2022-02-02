const { checkIsEmpty } = require("../utils/authMethods");
const ErrorResponse = require("../utils/errorResponse");

export const checkIsEmptyFunc = (req, res, next) => {
  const inComingData = req.body;

  for (key in inComingData) {
    if (checkIsEmpty(inComingData[key])) {
      return next(new ErrorResponse(`${key} cannot be left empty`));
    }
  }
};
