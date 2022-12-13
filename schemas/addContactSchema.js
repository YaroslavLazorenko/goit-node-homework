const Joi = require("joi");

const { PHONE_REG_EXP } = require("../consts");

const addContactSchema = Joi.object({
  name: Joi.string().min(2).max(30).required().messages({
    "any.required": "Missing required name field",
    "string.empty": "Name field cannot be an empty string",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .lowercase()
    .required()
    .messages({
      "any.required": "Missing required email field",
      "string.empty": "Email field cannot be an empty string",
    }),
  phone: Joi.string().regex(PHONE_REG_EXP).required().messages({
    "any.required": "Missing required phone number field",
    "string.empty": "Phone number field cannot be an empty string",
  }),
  favorite: Joi.boolean(),
});

module.exports = addContactSchema;
