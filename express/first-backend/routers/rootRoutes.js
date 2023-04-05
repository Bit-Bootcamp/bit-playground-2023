import { Router } from "express";
import {
  getRequest,
  postRequest,
  putRequest,
} from "../controllers/rootControllers.js";

const router = Router();

router.route("/").get(getRequest).post(postRequest).put(putRequest);

export default router;
