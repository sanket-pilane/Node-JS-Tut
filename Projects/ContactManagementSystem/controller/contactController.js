const asyncHandler = require("express-async-handler");
const Contacts = require("../models/contactsModel");

const getContactsController = asyncHandler(async (req, res) => {
  const contacts = await Contacts.find({ user_id: req.user.id });
  res.status(200).json({ contacts });
});
const getContactController = asyncHandler(async (req, res) => {
  const contact = await Contacts.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw Error("Contact Not found ");
  }
  res.status(200).json(contact);
});

const createNewContactsController = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields are Requiredasync ");
  }
  const contact = await Contacts.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(201).json(contact);
});

const deleteContactsController = asyncHandler(async (req, res) => {
  const contact = await Contacts.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw Error("Contact Not found ");
  }

  // Delete by ID
  await Contacts.findByIdAndDelete(req.params.id);

  res.status(200).json(contact);
});

const updateContactsController = asyncHandler(async (req, res) => {
  const contact = await Contacts.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw Error("Contact Not found ");
  }

  const updatedContacts = await Contacts.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContacts);
});

module.exports = {
  getContactsController,
  getContactController,
  createNewContactsController,
  deleteContactsController,
  updateContactsController,
};
