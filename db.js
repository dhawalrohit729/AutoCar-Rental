const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://Dhawal123:Rohit123@dhawalfirstcluster.7gomh.mongodb.net/Dhawal-Cars",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB Connection Error");
  });
}

connectDB();

module.exports = mongoose;
