const getAllTask = (req, res) => {
  res.send("all items");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.send("get tASK");
};
const updateTask = (req, res) => {
  res.send("update tASK");
};

const deleteTask = (req, res) => {
  res.send("delete tASK");
};

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
