const asyncHandler = require("express-async-handler");

const registerUserController = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "register User" });
});
const loginUserController = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "login User" });
});
const currentUserController = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "current User" });
});

module.exports = {
  registerUserController,
  loginUserController,
  currentUserController,
};
