const express = require("express");
const {
  chatController,
  codeController,
} = require("../controller/textControllerGemini");
const router = express.Router();

router.post("/chat", chatController);

router.post("/code", codeController);

module.exports = router;
