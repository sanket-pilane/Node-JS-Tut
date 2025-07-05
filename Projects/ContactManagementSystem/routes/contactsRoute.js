const express = require("express");
const router = express.Router();
const {
  getContactsController,
  getContactController,
  updateContactsController,
  deleteContactsController,
  createNewContactsController,
} = require("../controller/contactController");
const validateToken = require("../middleware/validationCheckHandler");

router.use(validateToken);

router.route("/").get(getContactsController).post(createNewContactsController);
router
  .route("/:id")
  .put(updateContactsController)
  .get(getContactController)
  .delete(deleteContactsController);

module.exports = router;
