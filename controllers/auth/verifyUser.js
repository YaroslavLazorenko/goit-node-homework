const { HttpError } = require("../../helpers");
const { User } = require("../../models");

const verifyUser = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });

  if (!user) {
    throw HttpError(404, "User not found");
  }

  await User.findByIdAndUpdate(user._id, {
    verificationToken: null,
    verify: true,
  });

  res.json({ message: "Verification successful" });
};

module.exports = verifyUser;
