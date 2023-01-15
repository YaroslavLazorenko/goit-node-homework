const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, SENDER_EMAIL } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async (data) => {
  const email = { ...data, from: SENDER_EMAIL };
  await sgMail.send(email);
};

module.exports = sendMail;
