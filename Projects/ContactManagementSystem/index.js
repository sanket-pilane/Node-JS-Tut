const express = require("express");
const dotenv = require("dotenv").config();
const contactRoute = require("./routes/contactsRoute");
const errorHandler = require("./middleware/errorHandler");
const userRoute = require("./routes/userRoute");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

const app = express();
connectDB();
app.use(express.json());
app.use("/api/contacts", contactRoute);
app.use("/api/user", userRoute);
// app.use(errorHandler);
app.listen(PORT, () => console.log(`server Running on Port: ${PORT}`));
