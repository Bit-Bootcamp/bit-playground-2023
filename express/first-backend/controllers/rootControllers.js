import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
  response.json({ message: "GET request sent", status: "success" });
});

router.post("/", (request, response) => {
  response.json({ message: "POST request sent, waiting ", status: "success" });
});

router.put("/", (request, response) => {
  response.json({ message: "PUT request sent", status: "success" });
});

export default router;
