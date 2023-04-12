import { Router } from "express";
import { addStudent, getStudents } from "../controllers/students.controller.js";

const router = Router();

router.route("/").post(addStudent).get(getStudents);

export default router;
