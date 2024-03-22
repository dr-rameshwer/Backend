const express = require("express");
const app = express();

// Route definition for handling search query
app.get("/search", (req, res) => {
  // Accessing query parameters using req.query
  const query = req.query.query;
  res.send(`Search Query: ${query}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
/*
Start server

node your_file_name.js


Open Postman: Open the Postman application on your computer.

Create a GET Request:

Set the request type to GET.
Set the request URL to http://localhost:3000/search?query=express.
Click on the "Send" button to send the request.
Verify Response:

You should receive a response with the search query you provided in the
 request URL. It should look like Search Query: express.

*/
