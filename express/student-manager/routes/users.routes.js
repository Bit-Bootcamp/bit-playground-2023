import { Router } from "express";
import { getUser, login, signup } from "../controllers/user.controller.js";
import { signUpMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").get(getUser);
// .post(createUser);
router.route("/signup").post(signUpMiddleware, signup);

router.post("/login", login);

export default router;
