import express from "express";
import path from "path";
import fs from "fs";
import morgan from "morgan";
// import rootController from "./controllers/rootControllers.js";
// const express = require("express");
const port = 4000;

//
const __dirname = path.resolve();
const data = JSON.parse(fs.readFileSync(`${__dirname}/data/db.json`));

const app = express();

app.use(express.json());
app.use(morgan());

app.use((req, res, next) => {
  if (req.headers.authentication === "hama") {
    next();
  }
  res.status(401).json({ status: "error", message: "not authorized" });
});

// app.use("/", rootController);

const getAllTodo = (req, res) => {
  res.json({ status: "success", data: data.todos });
};

const getTodoById = (req, res) => {
  const id = parseInt(req.params.id);

  const todo = data.todos.find((todo) => todo.id === id);

  if (!todo) {
    res.status(404).json({ status: "error", message: "todo not found" });
  }

  res.status(200).json({ status: "success", data: todo });
};

const addTodo = async (req, res) => {
  const id = data.todos[data.todos.length - 1].id + 1;
  const todo = { ...req.body, id };
  data.todos.push(todo);
  await fs.promises.writeFile(
    `${__dirname}/data/db.json`,
    JSON.stringify(data)
  );
  res.status(201).json({ status: "success", data: todo });
};

const updateTodo = async (req, res) => {
  const id = parseInt(req.params.id);
  let updated = false;

  const todos = data.todos.map((todo) => {
    if (todo.id === id) {
      updated = true;
      return { ...req.body, id };
    }
    return todo;
  });

  data.todos = todos;
  if (updated) {
    await fs.promises.writeFile(
      `${__dirname}/data/db.json`,
      JSON.stringify(data)
    );

    res.status(200).json({ status: "success", data: { ...req.body, id } });
  }
  res.status(404).json({ status: "error", message: "todo not found" });
};

app.route("/api/todos").get(getAllTodo).post(addTodo);
app.route("/api/todos/:id").get(getTodoById).patch(updateTodo);

app.listen(port, () => {
  console.log(`first backend app listening on port ${port}`);
});
