const { Schema, model } = require("mongoose");
const Joi = require("joi");

const todOSchema = Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 20,
      required: true,
    },
    description: {
      type: String,
      minlength: 3,
      maxlength: 255,
      required: true,
    },
    status: {
      type: String,
      enum: ["Todo", "In progress", "Done"],
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Todo = model("todo", todOSchema);

const todoJoiSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  description: Joi.string().min(3).max(255).required(),
  status: Joi.string().required(),
});

module.exports = {
  Todo,
  todoJoiSchema,
};
