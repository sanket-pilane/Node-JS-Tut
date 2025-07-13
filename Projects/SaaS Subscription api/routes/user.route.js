const express = require("express");
const { authMiddleware } = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/me", authMiddleware, (req, res) => {
  res.json({ message: "User profile route", user: req.user });
});

module.exports = router;
