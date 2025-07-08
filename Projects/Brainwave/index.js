const express = require("express");
const dotenv = require("dotenv").config();
const mediaRoutes = require("./routes/mediaRoutes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/api", mediaRoutes);

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
