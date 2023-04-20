import { Router } from "express";
import { getUser, signup } from "../controllers/user.controller.js";
import passport from "passport";
import { loginMiddlware } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").get(getUser);
// .post(createUser);
router
  .route("/signup")
  .post(passport.authenticate("signup", { session: false }), signup);

router.post("/login", loginMiddlware);

export default router;
