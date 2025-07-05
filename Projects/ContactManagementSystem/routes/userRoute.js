const express = require("express");
const {
  registerUserController,
  loginUserController,
  currentUserController,
} = require("../controller/userController");

const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.get("/current", currentUserController);

module.exports = router;
