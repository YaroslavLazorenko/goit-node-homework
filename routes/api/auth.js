const express = require("express");

const { signup, login } = require("../../controllers/auth");
const { authSchema } = require("../../schemas/user");
const { validateBody, authenticate } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.post("/signup", validateBody(authSchema), ctrlWrapper(signup));

router.post("/login", validateBody(authSchema), ctrlWrapper(login));

module.exports = router;
