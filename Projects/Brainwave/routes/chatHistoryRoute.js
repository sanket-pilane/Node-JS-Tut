const express = require("express");
const chatHistoryController = require("../controller/chatHistoryController");

const router = express.Router();

router.get("/chats", chatHistoryController);

module.exports = router;
