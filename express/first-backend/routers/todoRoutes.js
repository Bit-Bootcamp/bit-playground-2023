import { Router } from "express";
import {
  getAllTodo,
  addTodo,
  getTodoById,
  updateTodo,
} from "../controllers/todoControllers.js";

const router = Router();

router.route("/").get(getAllTodo).post(addTodo);
router.route("/:id").get(getTodoById).patch(updateTodo);

export default router;
