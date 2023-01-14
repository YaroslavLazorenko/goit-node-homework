const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async (mail) => {
  await sgMail.send(mail);
};

module.exports = sendMail;
