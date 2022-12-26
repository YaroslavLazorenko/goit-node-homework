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

const { isValidId, validateBody, authenticate } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(getAll));

router.get("/:id", authenticate, isValidId, ctrlWrapper(getById));

router.post(
  "/",
  authenticate,
  validateBody(addContactSchema),
  ctrlWrapper(add)
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(updateById)
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(updateStatusSchema),
  ctrlWrapper(updateStatusContact)
);

router.delete("/:id", authenticate, isValidId, ctrlWrapper(removeById));

module.exports = router;
