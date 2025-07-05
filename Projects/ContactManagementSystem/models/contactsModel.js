const mongoose = require("mongoose");

const contactSchemas = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add a the contact Name "],
    },
    email: {
      type: String,
      require: [true, "Please add a the Email "],
    },
    phone: {
      type: String,
      require: [true, "Please add a the conatct Phone Number  "],
    },
  },
  {
    Timestamp: true,
  }
);

module.exports = mongoose.model("Contacts", contactSchemas);
