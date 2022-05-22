const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");
const { todoJoiSchema } = require("../../models/todos");
const { todos } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(todos.getAll));

router.post("/", validation(todoJoiSchema), ctrlWrapper(todos.add));

router.put("/:id", validation(todoJoiSchema), ctrlWrapper(todos.updateById));

router.delete("/:id", ctrlWrapper(todos.removeById));

module.exports = router;
