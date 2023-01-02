const multer = require("multer");
const path = require("path");

const { TEMP_DIR } = require("../consts");

const tempDir = path.join(__dirname, "../", TEMP_DIR);

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
