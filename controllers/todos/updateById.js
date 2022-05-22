const createError = require("http-errors");

const { Todo } = require("../../models");

const updateById = async (req, res, next) => {
  const { id } = req.params;
  Todo.findByIdAndUpdate(id, req.body, { new: true }, function (err, todo) {
    if (err) return next(createError(`Todo with id=${id} not found`));
    res.json({
      status: "success",
      code: 200,
      data: {
        todo,
      },
    });
  });
};

module.exports = updateById;
