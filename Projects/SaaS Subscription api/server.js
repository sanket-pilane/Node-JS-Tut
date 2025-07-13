const app = require("./app");
const db = require("./config/db");
require("dotenv").config();
const userRoutes = require("./routes/auth.route");
const PORT = process.env.PORT || 3000;

db();

app.use("/api/user", require("./routes/user.route"));
app.use("/api/admin", require("./routes/admin.route"));
app.use("/api/premium", require("./routes/premium.route"));
app.use("/api/auth", userRoutes);
app.listen(PORT, () => console.log(`Server Started at Port: ${PORT}`));
