import Student from "../models/students.models.js";

export const getStudents = async (req, res) => {
  try {
    // const filteredStudent = await Student.find()
    //   .where("isActive")
    //   .equals(true)
    //   .where("age")
    //   .gte(12);

    let query = JSON.stringify(req.query);
    query = query.replace(/\b(gte|gt|lt|lte)\b/g, (match) => `$${match}`);

    const students = await Student.find(JSON.parse(query));

    res.json({ status: "success", results: students.length, data: students });
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
