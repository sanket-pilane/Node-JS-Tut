require("dotenv").config(); // <-- Add this line at the top

const express = require("express");
const router = express.Router();
const User = require("../model/user");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const bodyParser = require("body-parser");

// Stripe requires raw body for webhook
router.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error("Webhook signature verification failed.", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle successful checkout
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const customerId = session.customer;

      try {
        const user = await User.findOne({ stripeCustomerId: customerId });
        if (user) {
          user.subscriptionStatus = "active";
          user.role = "premium";
          await user.save();
          console.log(`User ${user.email} upgraded to premium.`);
        }
      } catch (err) {
        console.error("Failed to update user subscription status:", err);
      }
    }

    res.status(200).json({ received: true });
  }
);

module.exports = router;
