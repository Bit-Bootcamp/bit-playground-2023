import { Router } from "express";
import {
  addStudent,
  getStudentById,
  getStudents,
} from "../controllers/students.controller.js";

/**
 * @swagger
 * components:
 *  schemas:
 *    students:
 *      type: object
 *      required:
 *        - fullName
 *        - age
 *      properties:
 *        _id:
 *          type: ObjectId
 *          description: mongodb default object id
 *        fullName:
 *          type: string
 *        isActive:
 *          type: boolean
 *          description: a boolean describes if the student is still studying
 *        age:
 *          type: number
 *        startDate:
 *          type: string
 *          format: date
 *          description: the date the student started studying
 *      example:
 *        _id: 64367315629e7cd7ce99836f
 *        fullName: danita chalke
 *        isActive: false
 *
 */
const router = Router();

router.route("/").post(addStudent).get(getStudents);
router.route("/:id").get(getStudentById);

export default router;
