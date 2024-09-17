const router = require("express").Router();
const Todo = require("../../models/todo");

router.get("/", (req, res) => {
  const todo = Todo.find({});
  return res.status(200).json({ msg: "todo get method is working", todos });
});

router.post("/", (req, res) => {
  const { data } = req.body;
  return res.status(200).json({ msg: "todo post method is working", data });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;

  return res.status(200).json({ msg: "todo put method is working", id });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  return res.status(200).json({ msg: "todo delete method is working", id });
});

module.exports = router;
