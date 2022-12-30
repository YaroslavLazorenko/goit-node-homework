const multer = require("multer");
const path = require("path");

const { TEMP_DIRECTORY } = require("../consts");

const tempDir = path.join(__dirname, "../", TEMP_DIRECTORY);

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
