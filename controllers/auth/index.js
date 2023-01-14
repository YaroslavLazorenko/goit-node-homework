const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const current = require("./current");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const verifyUser = require("./verifyUser");
const repeatVerifyUser = require("./repeatVerifyUser");

module.exports = {
  signup,
  login,
  logout,
  current,
  updateSubscription,
  updateAvatar,
  verifyUser,
  repeatVerifyUser,
};
