const Joi = require("joi");

const { EMAIL_REG_EXP } = require("../../consts");

const resendVerifyEmailSchema = Joi.object({
  email: Joi.string().regex(EMAIL_REG_EXP).lowercase().required().messages({
    "any.required": "Missing required email field",
    "string.empty": "Email field cannot be an empty string",
  }),
});

module.exports = resendVerifyEmailSchema;
