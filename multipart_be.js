const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer(); // Multer for handling multipart form data

// Middleware to handle multipart form data

/*
app.use() is used to mount the specified middleware function or 
middleware array at the specified path. In this case, it's mounting the middleware function upload.none().

upload.none() is a function provided by the multer middleware. 
Multer is a Node.js middleware used for handling multipart/form-data, 
which is primarily used for uploading files. 
However, upload.none() specifically handles multipart forms with no files. 
It parses incoming form data when there are no files attached to the request.

When app.use(upload.none()) is called, 
it attaches the upload.none() middleware to every incoming request to the Express application. 
This means that before any route handlers are executed, Express will pass the incoming 
request through this middleware.

The purpose of upload.none() in this context is 
to parse the incoming request body and make the form data available in 
req.body for further processing. Even though there are no files attached to the form, 
the text fields' data can still be accessed in req.body.
*/
app.use(upload.none());

// Route to handle form submission
app.post("/submit", (req, res) => {
  // Access form fields via req.body
  const formData = req.body;

  // Handle form data processing here
  console.log(formData);

  // Send response
  res.send("Form submitted successfully");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
