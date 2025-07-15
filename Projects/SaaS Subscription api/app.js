const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use("/api/stripe", require("./routes/stripeWebhook.route"));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("SaaS Backend is live");
});
module.exports = app;
