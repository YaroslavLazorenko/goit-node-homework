const express = require("express");

const {
  getAll,
  getById,
  add,
  updateById,
  removeById,
  updateStatusContact,
} = require("../../controllers/contacts");
const {
  addContactSchema,
  updateContactSchema,
  updateStatusSchema,
} = require("../../schemas/contact");
const { isValidId, validateBody } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", ctrlWrapper(getAll));

router.get("/:id", isValidId, ctrlWrapper(getById));

router.post("/", validateBody(addContactSchema), ctrlWrapper(add));

router.put(
  "/:id",
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(updateById)
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateStatusSchema),
  ctrlWrapper(updateStatusContact)
);

router.delete("/:id", isValidId, ctrlWrapper(removeById));

module.exports = router;
