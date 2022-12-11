const Contact = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const removeById = async (req, res, _) => {
  const contactId = req.params.contactId;
  const result = await Contact.findOneAndRemove({ _id: contactId });

  if (!result) {
    throw HttpError(404);
  }

  res.json({
    message: "Contact deleted",
  });
};

module.exports = removeById;
