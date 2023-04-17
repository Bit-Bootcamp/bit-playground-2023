import mongoose from "mongoose";

const marksSchema = new mongoose.Schema({
  mark: { type: Number, required: true },

  student: { type: mongoose.Types.ObjectId, ref: "student", required: true },
  class: { type: mongoose.Types.ObjectId, ref: "class", required: true },
});

const marks = mongoose.model("mark", marksSchema);
export default marks;
