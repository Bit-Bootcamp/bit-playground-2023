import express from "express";
import morgan from "morgan";
import { connectDb } from "./config/db.js";

import studentsRoutes from "./routes/students.routes.js";
import classesRoutes from "./routes/classes.routes.js";

import dotenv from "dotenv";
import { trimQueryMiddleware } from "./middlewares/trimQuery.middleware.js";
dotenv.config();

connectDb();

const app = express();

app.use(express.json());
app.use(trimQueryMiddleware);

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/students", studentsRoutes);
app.use("/api/classes", classesRoutes);

export default app;
