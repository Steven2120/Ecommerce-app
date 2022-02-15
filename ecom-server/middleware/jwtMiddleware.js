const jwt = require("jsonwebtoken");
const User = require("../model/User");
const ErrorMessageHandlerClass = require("../utils/ErrorMessageHandlerClass");

// exports.private = async (req, res, next) => {
//   try {
//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith("Bearer")
//     ) {
//       token = req.headers.authorization.split(" ")[1];
//       let decodedJwt = jwt.verify(token, process.env.JWT_SECRET_CODE);

//       res.locals.decodedJwt = decodedJwt;

//       next();
//     }

//     if (!token) {
//       return next(
//         new ErrorResponse("Not Authorized to access this route", 401)
//       );
//     }
//   } catch (error) {
//     res.status(error.statusCode).json({ message: error.message, error: error });
//   }
// };

// exports.private = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     token = req.headers.authorization.split(" ")[1];
//   }

//   if (!token) {
//     return next(new ErrorResponse("Not Authorized to access this route", 401));
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_CODE);

//     const user = await User.findById(decoded.id);

//     if (!user) {
//       return next(new ErrorResponse("No user was found with that id", 404));
//     }

//     req.user = user;

//     next();
//   } catch (error) {
//     next(new ErrorResponse("Not authorized to access this route", 401));
//   }
// };

async function checkJwtToken(req, res, next) {
  try {
    if (req.headers && req.headers.authorization) {
      console.log(req.headers);
      // console.log(req.headers.authorization);
      let jwtToken = req.headers.authorization.slice(7);
      let decodedJwt = jwt.verify(jwtToken, process.env.JWT_SECRET_CODE);
      // console.log(decodedJwt);

      res.locals.decodedJwt = decodedJwt;
      //console.log(decodedJwt.message);
      //console.log(decodedJwt.status);

      next();
    } else {
      throw { message: "You Don't have permission! ", statusCode: 500 };
    }
  } catch (e) {
    console.log(e.message);
    console.log(e.code);
    res.status(e.statusCode).json({ message: e.message, error: e });
  }
}
module.exports = checkJwtToken;
