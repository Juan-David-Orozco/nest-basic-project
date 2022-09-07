import { Schema } from "mongoose";

export const TaskSchema = new Schema({
  title: String,
  description: String,
  done: Boolean
})

//export default model('Task', taskScheman)