const { HttpError } = require("../../helpers");
const { User } = require("../../models");

const updateSubscription = async (req, res) => {
  const { subscription } = req.body;
  const { _id } = req.user;

  const result = await User.findByIdAndUpdate(
    _id,
    { subscription },
    {
      new: true,
    }
  );

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

module.exports = updateSubscription;
