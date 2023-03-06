const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://admin:admin@cluster0.fkhpkhr.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));
