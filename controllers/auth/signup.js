const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { sendMail } = require("../../helpers");
const { BASE_URL } = require("../../consts");

const { User } = require("../../models");

const { HttpError } = require("../../helpers");

const signup = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    from: "lazorenko85@gmail.com",
    subject: "Email confirmation",
    html: `<a target="_blank" href='${BASE_URL}/api/users/verify/${verificationToken}'>Hello! Please, click this link to confirm your email</a>`,
  };

  try {
    await sendMail(mail);
  } catch (err) {
    return next(err);
  }

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = signup;
