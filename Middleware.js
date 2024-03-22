const express = require('express');
const app = express();

// Middleware function to log the timestamp of each incoming request
app.use((req, res, next) => {
  console.log('Request received at:', new Date());
  next(); // Pass control to the next middleware function
});

// Middleware function to add a custom header to the response
app.use((req, res, next) => {
  res.setHeader('X-Custom-Header', 'Custom Value');
  next(); // Pass control to the next middleware function
});

// Route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Middleware function to handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
