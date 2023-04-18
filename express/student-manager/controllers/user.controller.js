import Classes from "../models/classes.model.js";
import Student from "../models/students.models.js";
import Users from "../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const user = await Users.create(req.body);
    res.json({ status: "success", data: user });
  } catch (err) {
    res.status(400).json({ status: "error", data: err });
  }
};

export const getUser = async (req, res) => {
  try {
    const classes = await Users.find().populate("studentId", "fullName");

    res.json({ status: "success", results: classes.length, data: classes });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "error", data: err });
  }
};
