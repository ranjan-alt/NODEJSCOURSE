const express = require("express");
const cors = require("cors");
const app = express();

const tasks = require("./routes/tasks");
const connectDb = require("./db/connect");

//middleware

app.use(express.json());
app.use(cors());

//routes

app.get("/", (req, res) => {
  res.send("task manager app");
});

app.use("/api/v1/task", tasks);

const port = 5000;

const start = async () => {
  try {
    await connectDb();
    app.listen(port, console.log(`server is listening on port no ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
