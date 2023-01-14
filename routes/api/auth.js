const express = require("express");

const {
  signup,
  login,
  logout,
  current,
  updateSubscription,
  updateAvatar,
  verifyUser,
  repeatVerifyUser
} = require("../../controllers/auth");

const { authSchema, updateSubscriptionSchema,repeatVerifyUserSchema } = require("../../schemas/user");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.post("/signup", validateBody(authSchema), ctrlWrapper(signup));

router.post("/login", validateBody(authSchema), ctrlWrapper(login));

router.get("/logout", authenticate, ctrlWrapper(logout));

router.get("/current", authenticate, ctrlWrapper(current));

router.patch(
  "/",
  authenticate,
  validateBody(updateSubscriptionSchema),
  ctrlWrapper(updateSubscription)
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);

router.get("/verify/:verificationToken", ctrlWrapper(verifyUser));

router.post(
  "/verify",
  validateBody(repeatVerifyUserSchema),
  ctrlWrapper(repeatVerifyUser)
);

module.exports = router;
