const mongoose = require("mongoose");

const contactSchemas = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
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
    timestamps: true, // <-- Correct spelling
  }
);

module.exports = mongoose.model("Contacts", contactSchemas);
