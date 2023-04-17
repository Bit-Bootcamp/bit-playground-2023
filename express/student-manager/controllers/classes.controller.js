import Classes from "../models/classes.model.js";
import Student from "../models/students.models.js";

export const createClass = async (req, res) => {
  try {
    const classes = await Classes.create(req.body);
    res.json({ status: "success", data: classes });
  } catch (err) {
    res.status(400).json({ status: "error", data: err });
  }
};

export const getClasses = async (req, res) => {
  try {
    const classes = await Classes.find().populate("students");

    res.json({ status: "success", results: classes.length, data: classes });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "error", data: err });
  }
};

export const registerClass = async (req, res) => {
  try {
    const classes = await Classes.findByIdAndUpdate(
      req.params.classId,
      {
        $push: { students: req.body.studentId },
      },
      {
        new: true,
      }
    );

    await Student.findByIdAndUpdate(req.body.studentId, {
      $push: { classes: req.params.classId },
    });

    res.json({ status: "success", data: classes });
  } catch (err) {
    res.status(400).json({ status: "error", data: err });
  }
};
