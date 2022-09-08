import mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  done: Boolean
})

//export default model('Task', taskScheman)