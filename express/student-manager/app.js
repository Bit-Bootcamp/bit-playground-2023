import express from "express";
import morgan from "morgan";
import { connectDb } from "./config/db.js";

import studentsRoutes from "./routes/students.routes.js";

import dotenv from "dotenv";
dotenv.config();

connectDb();

const app = express();

app.use(express.json());

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/students", studentsRoutes);

export default app;
