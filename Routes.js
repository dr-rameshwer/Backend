// Importing the Express.js library and creating an Express application instance
const express = require("express");
const app = express();

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Array to store todo items (for demonstration purposes)
let todos = [
  { id: 1, title: "Learn Express.js", completed: false },
  { id: 2, title: "Build a CRUD App", completed: false },
  { id: 3, title: "Build a CRUD App", completed: false },
  { id: 4, title: "Build a CRUD App", completed: false },
];

// GET all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// GET todo by ID
app.get("/todos/:id", (req, res) => {
  // Extracting todo ID from request parameters
  const todoId = parseInt(req.params.id);
  // Finding todo with matching ID
  const todo = todos.find((todo) => todo.id === todoId);
  // Returning error if todo not found
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  // Sending found todo as JSON response
  res.json(todo);
});

// POST a new todo
app.post("/todos", (req, res) => {
  // Extracting new todo from request body
  const newTodo = req.body;
  // Generating new ID for todo
  newTodo.id = todos.length + 1;
  // Adding new todo to the todos array
  todos.push(newTodo);
  // Sending newly created todo as JSON response with 201 status code (Created)
  res.status(201).json(newTodo);
});

// PUT update todo by ID
app.put("/todos/:id", (req, res) => {
  // Extracting todo ID from request parameters
  const todoId = parseInt(req.params.id);
  // Extracting updated todo from request body
  const updatedTodo = req.body;
  // Finding index of todo with matching ID
  let todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex === -1)
    // If todo not found, return error
    return res.status(404).json({ error: "Todo not found" });
  todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo }; // Updating todo with new data
  res.json(todos[todoIndex]); // Sending updated todo as JSON response
});

// DELETE todo by ID
app.delete("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id); // Extracting todo ID from request parameters
  todos = todos.filter((todo) => todo.id !== todoId); // Filtering out todo with matching ID
  res.status(204).send(); // Sending 204 status code (No Content) indicating successful deletion
});

// Setting the port for the Express server to listen on
const PORT = 3000;

// Starting the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
