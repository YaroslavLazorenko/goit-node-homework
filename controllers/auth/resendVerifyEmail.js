const { HttpError } = require("../../helpers");
const { User } = require("../../models");
const { sendMail } = require("../../services/email");

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(404, "User not found");
  }
  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  const mail = {
    to: email,
    subject: "Email confirmation",
    html: `<a target="_blank" href='${BASE_URL}/api/users/verify/${user.verificationToken}'>Hello! Please, click this link to confirm your email</a>`,
  };

  await sendMail(mail);

  res.json({ message: "Verification email sent" });
};

module.exports = resendVerifyEmail;
