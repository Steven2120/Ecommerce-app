// class ErrorResponse extends Error {
//   constructor(message, statusCode) {
//     super(message);
//     this.statusCode = statusCode;
//   }
// }

// module.exports = ErrorResponse;

class ErrorMessageHandlerClass extends Error {
  constructor(message, statusCode) {
    super(message, statusCode);
    this.statusCode = statusCode;
    this.status = `${statusCode.startsWith("4") ? "fail" : "error"}`;
    this.isOperational = true;
  }
}

module.exports = ErrorMessageHandlerClass;
