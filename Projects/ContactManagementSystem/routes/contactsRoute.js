const express = require("express");
const router = express.Router();
const {
  getContactsController,
  getContactController,
  updateContactsController,
  deleteContactsController,
  createNewContactsController,
} = require("../controller/contactController");

router.route("/").get(getContactsController).post(createNewContactsController);
router
  .route("/:id")
  .put(updateContactsController)
  .get(getContactController)
  .delete(deleteContactsController);

module.exports = router;
