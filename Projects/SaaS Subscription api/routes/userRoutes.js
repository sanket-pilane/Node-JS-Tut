const express = require("express");
const {
  registerController,
  loginController,
  refreshTokenController,
  logoutController,
} = require("../controller/authController");

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/refresh-token", refreshTokenController);
router.post("/logout", logoutController);

module.exports = router;
