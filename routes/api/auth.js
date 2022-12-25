const express = require("express");

const { signup } = require("../../controllers/auth");
const { authSchema } = require("../../schemas/user");
const { isValidId, validateBody } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.post("/signup", validateBody(authSchema), ctrlWrapper(signup));

module.exports = router;
