const crypto = require("crypto");
const User = require("../model/User");
const ErrorResponse = require("../utils/errorResponse");
const emailSender = require("../utils/emailSender");

exports.register = async (req, res, next) => {
  const { username, email, password, firstName, lastName } = req.body;
  try {
    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      password,
    });

    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(
      new ErrorResponse("Please enter a valid email and password", 400)
    );
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid Credentials", 401));
    }

    const matchedPasswords = await user.matchPasswords(password);

    if (!matchedPasswords) {
      return next(new ErrorResponse("Invalid Credentials", 401));
    }

    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("Email could not be sent", 404));
    }

    const resetToken = user.getResetPasswordToken();
    const tokenExp = user.resetPasswordExpiration;

    await user.save();

    const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`;

    const resetMessage = `
    <h2>Password Reset Request</h2>
    <p>Below is the link to reset your password as requested. The following link will only be valid until ${tokenExp}</p>
    <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;

    try {
      await emailSender({
        to: user.email,
        subject: "Request to reset password",
        text: resetMessage,
      });

      res.status(200).json({
        success: true,
        data: "Email has been sent",
      });
    } catch (error) {
      user.resetPassWordToken = undefined;
      user.resetPasswordExpiration = undefined;

      await user.save();

      return next(new ErrorResponse("Email could not be sent", 500));
    }
  } catch (error) {
    next(error);
  }
};

exports.resetpassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken: resetPasswordToken,
      resetPasswordExpiration: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Reset token not valid", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiration = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "Password has been reset successfully",
      token: user.getSignedToken(),
    });
  } catch (error) {
    next(error);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({
    success: true,
    token,
  });
};
