const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint to create a new user
app.post("/users", (req, res) => {
  // Accessing request body using req.body
  const userName = req.body.name;
  res.send(`User Name: ${userName}`);
});

// Route definition with parameter
app.get("/users/:userId", (req, res) => {
  // Accessing route parameter using req.params
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
Start the Server: Run the provided Express.js code in your terminal to start the server.

Open Postman: Open Postman and create a new request.

Set Request Type: Choose the HTTP method as POST.

Set Request URL: Set the request URL to http://localhost:3000/users.

Set Request Body: Go to the "Body" tab, select "raw", and choose
"JSON" from the dropdown. Enter {"name": "John"} in the text area.

Send Request: Click on the "Send" button to send the POST request.

Check Response: You should receive a response with the 
user name you provided in the request body. It should look like User Name: John.
*/
