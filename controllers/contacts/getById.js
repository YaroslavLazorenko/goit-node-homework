const Contact = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const getById = async (req, res, _) => {
  const contactId = req.params.contactId;
  const result = await await Contact.findOne({ _id: contactId });

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

module.exports = getById;
