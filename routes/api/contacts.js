const express = require("express");
const {
  getAll,
  getById,
  add,
  updateById,
  removeById,
} = require("../../controllers/contacts");

const router = express.Router();

router.get("/", getAll);

router.get("/:contactId", getById);

router.post("/", add);

router.delete("/:contactId", removeById);

router.put("/:contactId", updateById);

module.exports = router;
