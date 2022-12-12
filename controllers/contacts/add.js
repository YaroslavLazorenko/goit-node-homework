const { Contact } = require("../../models");

const add = async (req, res, _) => {
  const result = await Contact.create(req.body);

  res.status(201).json(result);
};

module.exports = add;
