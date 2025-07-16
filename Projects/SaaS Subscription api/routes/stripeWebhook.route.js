const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const webhookController = require("../controller/stripeWebhookController");

// Stripe requires raw body for webhook
router.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  webhookController
);

module.exports = router;
