const DEFAULT_SERVER_PORT = 3000;

const ERROR_MESSAGES = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

const PHONE_REG_EXP = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
const EMAIL_REG_EXP = /^\S+@\S+\.\S+$/;

const TEMP_DIR = "tmp";
const USERS_AVATARS_DIR = "avatars";

const BASE_URL = "http://localhost:3000";
const SENDER_EMAIL = "lazorenko85@gmail.com"

module.exports = {
  DEFAULT_SERVER_PORT,
  ERROR_MESSAGES,
  PHONE_REG_EXP,
  EMAIL_REG_EXP,
  TEMP_DIR,
  USERS_AVATARS_DIR,
  BASE_URL,
  SENDER_EMAIL,
};
