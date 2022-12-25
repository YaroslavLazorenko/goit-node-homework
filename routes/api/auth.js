const express = require("express");

const { signup, login, logout,current } = require("../../controllers/auth");
const { authSchema } = require("../../schemas/user");
const { validateBody, authenticate } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.post("/signup", validateBody(authSchema), ctrlWrapper(signup));

router.post("/login", validateBody(authSchema), ctrlWrapper(login));

router.get("/logout", authenticate, ctrlWrapper(logout));

router.get("/current", authenticate, ctrlWrapper(current));

module.exports = router;
