const {
  isEmpty,
  isStrongPassword,
  isEmail,
  isAlpha,
  isAlphanumeric,
} = require("validator");

export const checkIsEmpty = (target) => {
  isEmpty(target) ? true : false;
};

export const checkIsStrongPassword = (password) => {
  isStrongPassword(password) ? true : false;
};

export const checkIsEmail = (email) => {
  isEmail(email) ? true : false;
};

export const checkIsAlpha = (target) => {
  isAlpha(target) ? true : false;
};

export const checkIsAlphaNumeric = (target) => {
  isAlphanumeric(target) ? true : false;
};
