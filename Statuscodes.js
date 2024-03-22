const express = require("express");
const app = express();
const port = 3000;

// Sample todos data
let todos = [
  { id: 1, title: "Learn Express.js", completed: false },
  { id: 2, title: "Build a CRUD App", completed: false },
];

// Middleware to parse JSON bodies
app.use(express.json());

// GET all todos
app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

// POST a new todo
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  if (!newTodo || !newTodo.title) {
    // If the request body is missing or the title field is missing
    res.status(400).json({ error: "Bad Request" });
  } else {
    newTodo.id = todos.length + 1;
    todos.push(newTodo);
    res.status(201).json(newTodo);
  }
});

// GET a single todo by ID
app.get("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

// DELETE a todo by ID
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
