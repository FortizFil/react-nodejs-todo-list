const createError = require("http-errors");

const { Todo } = require("../../models");

const removeById = async (req, res, next) => {
  const { id } = req.params;

  Todo.findByIdAndRemove(id, function (err, todo) {
    if (err) return next(createError(`Todo with id=${id} not found`));
    res.json({
      status: "success",
      code: 200,
      message: "todo deleted",
    });
  });
};

module.exports = removeById;
