const Contact = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const updateById = async (req, res, _) => {
  const contactId = req.params.contactId;
  const result = await Contact.findOneAndUpdate(
    { _id: contactId },
    { ...req.body },
    { new: true }
  );

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

module.exports = updateById;
