const sgMail = require("@sendgrid/mail");
const { SENDER_EMAIL } = require("../consts");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async (data) => {
  const email = { ...data, from: SENDER_EMAIL };
  await sgMail.send(email);
};

module.exports = sendMail;
