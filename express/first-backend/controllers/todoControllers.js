import Todo from "../models/todoModel.js";
import path from "path";
import fs from "fs";

const __dirname = path.resolve();
const data = JSON.parse(fs.readFileSync(`${__dirname}/data/db.json`));

export const getAllTodo = async (req, res) => {
  // const search = req.query.search;
  // if (search) {
  //   res.json({ status: "success", data: `successful search: ${search}` });
  // }
  // res.json({ status: "success", data: data.todos });

  const todos = await Todo.find();
  // console.log(todos.data);
  res.json({ status: "success", data: todos });
};

export const getTodoById = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    return res.status(404).json({ status: "error", message: "todo not found" });
  }

  res.json({ status: "success", data: todo });
  // const id = parseInt(req.params.id);
  // const todo = data.todos.find((todo) => todo.id === id);

  // res.status(200).json({ status: "success", data: todo });
};

export const addTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);

    res.status(201).json({ status: "success", data: todo });
  } catch (err) {
    res.status(400).json({ status: "error", data: err.message });
  }

  // const id = data.todos[data.todos.length - 1].id + 1;
  // const todo = { ...req.body, id };
  // data.todos.push(todo);
  // await fs.promises.writeFile(
  //   `${__dirname}/data/db.json`,
  //   JSON.stringify(data)
  // );
  // res.status(201).json({ status: "success", data: todo });
};

export const updateTodo = async (req, res) => {
  const id = req.params.id;

  const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });

  if (!todo) {
    return res.status(404).json({ status: "error", message: "todo not found" });
  }

  res.status(200).json({ status: "success", data: todo });
  // let updated = false;

  // const todos = data.todos.map((todo) => {
  //   if (todo.id === id) {
  //     updated = true;
  //     return { ...req.body, id };
  //   }
  //   return todo;
  // });

  // data.todos = todos;
  // if (updated) {
  //   await fs.promises.writeFile(
  //     `${__dirname}/data/db.json`,
  //     JSON.stringify(data)
  //   );

  //   res.status(200).json({ status: "success", data: { ...req.body, id } });
  // }
  // res.status(404).json({ status: "error", message: "todo not found" });
};
