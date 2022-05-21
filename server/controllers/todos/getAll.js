const { Todo } = require("../../models");

const getAll = async (req, res) => {
  const todos = await Todo.find({});
  const completeTodos = todos.filter((el) => el.status === "Done");
  res.json({
    status: "success",
    code: 200,
    data: {
      result: todos,
      allTodos: todos.length,
      completeTodos: completeTodos.length,
    },
  });
};

module.exports = getAll;
