import ErrorResponse from "../utils/errorResponse";

const { checkIsStrongPassword } = require("../utils/authMethods");

export const checkIsStrongPasswordFunc = (req, res, next) => {
  if (checkIsStrongPassword(req.body.password)) {
    return next(
      new ErrorResponse(
        "Password must include 1 lowercase, 1 uppercase, 1 special character, 1 number, and a length of 8"
      )
    );
  }
};
