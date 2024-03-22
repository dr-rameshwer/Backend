/*
Start the Server: Make sure your Express.js server is running.

Open Postman: Open the Postman application on your computer.

Create a GET Request:

Set the request type to GET.
Set the request URL to http://localhost:3000/user-agent.
Click on the "Send" button.
Verify Response:

Check the response to see the User-Agent header value extracted from your request.
*/

const express = require("express");
const app = express();

// Route definition for retrieving User-Agent header
app.get("/user-agent", (req, res) => {
  // Accessing request header using req.header
  const userAgent = req.header("User-Agent"); // Accessing the User-Agent header from the request
  res.send(`User-Agent: ${userAgent}`); // Sending the User-Agent back in the response
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
