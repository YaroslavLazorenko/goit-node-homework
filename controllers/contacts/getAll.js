const { Contact } = require("../../models");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;

  let filter = null;
  if (favorite === "false" || favorite === "true") {
    const isFavoriteTrue = favorite === "true";
    filter = { favorite: isFavoriteTrue };
  }

  const result = await Contact.find(
    { owner, ...filter },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  ).populate("owner", "email");

  res.json(result);
};

module.exports = getAll;
