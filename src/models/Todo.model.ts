import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.models.todos || mongoose.model("todos", todoSchema);

export default Todo;
