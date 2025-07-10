const mongoose = require("mongoose");

const chatSchemas = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please Enter username"],
    },
    chat: {
      prompt: {
        type: String,
        required: true,
      },
      response: {
        type: String,
        required: true,
      },
    },
    model: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const chat = mongoose.model("chat", chatSchemas);
module.exports = chat;
