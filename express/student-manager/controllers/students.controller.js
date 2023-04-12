import Student from "../models/students.models.js";

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json({ status: "success", data: students });
  } catch (err) {
    res.status(400).json({ status: "error", data: err });
  }
};

export const addStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json({ status: "success", data: student });
  } catch (err) {
    res.status(400).json({ status: "error", data: err });
  }
};
