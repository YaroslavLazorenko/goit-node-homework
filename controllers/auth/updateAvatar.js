const fs = require("fs/promises");
const path = require("path");

const { User } = require("../../models");

const { USERS_AVATARS_DIRECTORY } = require("../../consts");

const avatarsDir = path.join(
  __dirname,
  "../../",
  "public",
  USERS_AVATARS_DIRECTORY
);

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join(USERS_AVATARS_DIRECTORY, filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;