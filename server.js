const mongoose = require("mongoose");

const app = require("./app");
const { DEFAULT_SERVER_PORT } = require("./libs/consts");

mongoose.set("strictQuery", false);

const { DB_HOST, PORT = DEFAULT_SERVER_PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
