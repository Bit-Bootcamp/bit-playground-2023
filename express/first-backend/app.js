import express from "express";
import rootController from "./controllers/rootControllers.js";
// const express = require("express");
const app = express();

const port = 4000;

app.use("/", rootController);

app.listen(port, () => {
  console.log(`first backend app listening on port ${port}`);
});
