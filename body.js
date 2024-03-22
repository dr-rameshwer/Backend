const express = require("express");
const app = express();

// Middleware to parse JSON bodies

app.use(express.json());

// Assuming the request contains JSON data {"name": "John"}
app.post("/users", (req, res) => {
  // Accessing request body using req.body
  const userName = req.body.name;
  res.send(`User Name: ${userName}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
app.use(express.json()) is a middleware function in Express.js 
that parses incoming requests with JSON payloads. It is used to extract the 
JSON object from the request body and make it available in 
req.body of your route handlers.
*/

/*
Open Postman and create a new request.
Set the request type to POST.
Set the request URL to http://localhost:3000/users.
Go to the "Body" tab, select "raw", and choose "JSON" from the dropdown.
Enter {"name": "John"} in the text area.
Click on the "Send" button to send the request.
*/
