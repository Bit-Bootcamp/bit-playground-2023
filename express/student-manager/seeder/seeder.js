import { connectDb } from "../config/db.js";
import fs from "fs";
import path from "path";

import dotenv from "dotenv";
import Students from "../models/students.model.js";
dotenv.config();

connectDb();

const __dirname = path.resolve();

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, `/seeder/data/${process.argv[3]}`))
);

const importData = async () => {
  try {
    await Students.create(data);
    console.log("import was successful");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};
const deleteData = async () => {
  try {
    await Students.deleteMany();
    console.log("delete was successful");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") deleteData();
