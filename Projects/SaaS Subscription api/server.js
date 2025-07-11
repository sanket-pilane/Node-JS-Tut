const app = require("./app");
const db = require("./config/db");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const PORT = process.env.PORT || 3000;

db();
app.use("/api", userRoutes);
app.listen(PORT, () => console.log(`Server Started at Port: ${PORT}`));
