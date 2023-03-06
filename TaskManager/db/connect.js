const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://admin:admin@cluster0.fkhpkhr.mongodb.net/?retryWrites=true&w=majority";

const connectDb = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDb;
