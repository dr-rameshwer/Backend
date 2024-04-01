const express = require("express");
const app = express();

// Route to send different types of data in the response
app.get("/", (req, res) => {
  // Sending a string
  res.send("Hello, World!");

  // Sending a JSON object
  // This will be automatically converted to JSON
  res.send({ message: "Hello, JSON!" });

  // Sending HTML content
  res.send("<h1>Hello, HTML!</h1>");

  // Sending a buffer
  // The Buffer.from() method is one of the ways to create
  // a Buffer object. It takes a string (or another iterable object) as its first
  // argument and an optional encoding as its second argument,
  // and returns a new Buffer object containing the binary representation of the provided string.
  // This will send the raw buffer data as response
  const bufferData = Buffer.from("Hello, Buffer!");
  res.send(bufferData);
  console.log(bufferData);

  res.send(42);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
