const express = require("express");
const {
  authMiddleware,
  authorizeRoles,
} = require("../middlewares/auth.middleware");
const showAllUsersForAdmin = require("../controller/adminController");
const router = express.Router();

router.get(
  "/dashboard",
  authMiddleware,
  authorizeRoles("admin"),
  showAllUsersForAdmin
);

module.exports = router;
