const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../middlewares/auth.middleware");
const createSessionController = require("../controller/stripeController");

router.post(
  "/create-checkout-session",
  authMiddleware,
  createSessionController
);

module.exports = router;
