const express = require("express");
const dotenv = require("dotenv").config();
const mediaRoutes = require("./routes/mediaRoutes");
const textRoutes = require("./routes/textRoutes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/api/media", mediaRoutes);
app.use("/api/text", textRoutes);

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
