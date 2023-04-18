import { Router } from "express";
import {
  addStudent,
  getStudentById,
  getStudents,
} from "../controllers/students.controller.js";

const router = Router();

router.route("/").post(addStudent).get(getStudents);
router.route("/:id").get(getStudentById);

export default router;
