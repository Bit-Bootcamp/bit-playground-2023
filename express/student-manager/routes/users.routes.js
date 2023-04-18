import { Router } from "express";
import { createUser, getUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/").get(getUser).post(createUser);

export default router;
