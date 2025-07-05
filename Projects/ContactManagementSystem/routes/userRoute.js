const express = require("express");
const {
  registerUserController,
  loginUserController,
  currentUserController,
} = require("../controller/userController");
const validateToken = require("../middleware/validationCheckHandler");

const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.get("/current", validateToken, currentUserController);

module.exports = router;
