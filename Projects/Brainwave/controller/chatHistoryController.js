const chat = require("../model/chat");

const chatHistoryController = async (req, res) => {
  try {
    const chats = await chat.find();
    res.status(200).json(chats);
  } catch (err) {
    console.log(err);
  }
};

module.exports = chatHistoryController;
