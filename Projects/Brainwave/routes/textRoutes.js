const express = require("express");
const {
  chatController,
  codeController,
} = require("../controller/textController");
const router = express.Router();

router.post("/chat", chatController);

router.post("/code", codeController);

module.exports = router;
