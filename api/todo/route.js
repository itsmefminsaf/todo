const router = require("express").Router();
const Todo = require("../../models/todo");

router.get("/", async (req, res) => {
  const todos = await Todo.find({});
  return res.status(200).json(todos);
});

router.post("/", async (req, res) => {
  const { data } = req.body;
  await Todo.create({ task: data, completed: false });
  return res.status(200).json({ msg: "todo post method is working", data });
});

router.put("/:id", async (req, res) => {
  const { id, completed } = req.params;
  await Todo.findByIdAndUpdate(id, { completed });
  return res.status(200).json({ msg: "todo put method is working", id });
});

router.delete("/:id", async (req, res) => {
  const { id, completed } = req.params;
  await Todo.findByIdAndDelete(id);
  return res.status(200).json({ msg: "todo delete method is working", id });
});

module.exports = router;
