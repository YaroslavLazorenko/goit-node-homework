const { HttpError } = require("../../helpers");
const { User } = require("../../models");
const { sendMail } = require("../../helpers");
const { BASE_URL } = require("../../consts");

const repeatVerifyUser = async (req, res, next) => {
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
    from: "lazorenko85@gmail.com",
    subject: "Email confirmation",
    html: `<a target="_blank" href='${BASE_URL}/api/users/verify/${user.verificationToken}'>Hello! Please, click this link to confirm your email</a>`,
  };

  try {
    await sendMail(mail);
  } catch (err) {
    return next(err);
  }

  res.json({ message: "Verification email sent" });
};

module.exports = repeatVerifyUser;
