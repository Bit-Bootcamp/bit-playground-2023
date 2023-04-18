import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },

  studentId: { type: mongoose.Types.ObjectId, ref: "student" },
});

const users = mongoose.model("user", usersSchema);
export default users;
