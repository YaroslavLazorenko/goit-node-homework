const Contact = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const updateStatusContact = async (req, res, _) => {
  const contactId = req.params.contactId;
  const { favorite } = req.body;
  const result = await Contact.findOneAndUpdate(
    { _id: contactId },
    { favorite },
    { new: true }
  );

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

module.exports = updateStatusContact;
