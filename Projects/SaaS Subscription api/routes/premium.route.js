const express = require("express");
const {
  authMiddleware,
  authorizeRoles,
} = require("../middlewares/auth.middleware");
const router = express.Router();

router.get(
  "/content",
  authMiddleware,
  authorizeRoles("premium", "admin"),
  (req, res) => {
    res.json({ message: "Premium Content Unlocked" });
  }
);

module.exports = router;
