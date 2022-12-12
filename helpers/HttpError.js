const { ERROR_MESSAGES } = require("../libs/consts");

const HttpError = (status, message = ERROR_MESSAGES[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = HttpError;
