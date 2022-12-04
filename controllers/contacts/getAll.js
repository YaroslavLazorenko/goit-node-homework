const { listContacts } = require("../../models/contacts");

const getAll = async (_, res, __) => {
  const result = await listContacts();
  res.json({ status: "success", code: 200, data: { result } });
};

module.exports = getAll;
