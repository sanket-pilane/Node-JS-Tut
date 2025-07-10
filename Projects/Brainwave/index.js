const express = require("express");
const dotenv = require("dotenv").config();
const mediaRoutes = require("./routes/mediaRoutes");
const textRoutes = require("./routes/textRoutes");
const morgan = require("morgan");
const connectMongo = require("./config/db");

const PORT = process.env.PORT || 3000;

const app = express();
connectMongo();
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/media", mediaRoutes);
app.use("/api/text", textRoutes);

const requiredEnv = ["GEMINI_API_KEY", "OPENAI_API_KEY", "REPLICATE_API_TOKEN"];
requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    console.error(`Missing required environment variable: ${key}`);
    process.exit(1);
  }
});

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
