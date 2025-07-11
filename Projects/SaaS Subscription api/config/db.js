const mongoose = require("mongoose");

const db = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Databsae Connected to ${connect.connection.name}`);
  } catch (err) {
    console.log(err);
  }
};
module.exports = db;
