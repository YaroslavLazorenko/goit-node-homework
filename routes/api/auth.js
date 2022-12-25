const express = require("express");

const { signup, login, logout } = require("../../controllers/auth");
const { authSchema } = require("../../schemas/user");
const { validateBody, authenticate } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.post("/signup", validateBody(authSchema), ctrlWrapper(signup));

router.post("/login", validateBody(authSchema), ctrlWrapper(login));

router.get("/logout", authenticate, ctrlWrapper(logout));

module.exports = router;
