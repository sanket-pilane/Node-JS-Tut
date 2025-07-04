const asyncHandler = require("express-async-handler");
const getContactsController = async (req, res) => {
  res.status(200).json({ message: "Welcome to Server" });
};
const getContactController = async (req, res) => {
  res.status(200).json({ message: "Indivitual Contactr" });
};
const createNewContactsController = async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;

  if (!name && !email && !phone) {
    res.status(400);
    throw new Error("All Fields are Requiredasync ");
  }
  res.status(201).json({ message: `Created Contacet` });
};
const deleteContactsController = async (req, res) => {
  res.status(201).json({ message: `Route with ID ${req.params.id}` });
};
const updateContactsController = async (req, res) => {
  res.status(201).json({ message: `Route with ID ${req.params.id}` });
};

module.exports = {
  getContactsController,
  getContactController,
  createNewContactsController,
  deleteContactsController,
  updateContactsController,
};
