const mongoose = require("mongoose");

const connectMongo = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Databas connected to: ${connect.connection.name}`);
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectMongo;
