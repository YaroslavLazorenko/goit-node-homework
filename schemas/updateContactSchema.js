const Joi = require("joi");

const { PHONE_REG_EXP } = require("../consts");

const updateContactSchema = Joi.object({
  name: Joi.string().min(2).max(30).messages({
    "string.empty": "Name field cannot be an empty string",
  }),
  email: Joi.string().email({ minDomainSegments: 2 }).lowercase().messages({
    "string.empty": "Email field cannot be an empty string",
  }),
  phone: Joi.string().regex(PHONE_REG_EXP).messages({
    "string.empty": "Phone number field cannot be an empty string",
  }),
  favorite: Joi.boolean(),
})
  .required()
  .min(1)
  .messages({
    "object.min": "Missing fields",
  });

module.exports = updateContactSchema;
