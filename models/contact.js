const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");
const { PHONE_REG_EXP, EMAIL_REG_EXP } = require("../consts");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      match: EMAIL_REG_EXP,
    },
    phone: {
      type: String,
      match: PHONE_REG_EXP,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

module.exports = Contact;
