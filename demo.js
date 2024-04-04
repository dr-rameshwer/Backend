// Import required modules
const express = require("express");
const mongoose = require("mongoose");

// Create Express application
const app = express();
const port = 3000;

// MongoDB Atlas Connection URL
const mongoURL =
  "mongodb+srv://admin:mern_123@collegecluster.yd9dyhi.mongodb.net/collegedb";

// Define a Mongoose Schema for the document

const documentSchema = new mongoose.Schema({
  // Define the schema fields and their types
  // For example:
  name: String,
  age: Number,
  email: String,
});

// Define a Mongoose Model based on the schema

const Document = mongoose.model("Document", documentSchema, "documents");

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB Atlas using Mongoose
//{ useUnifiedTopology: true } is an option used with the MongoDB Node.js
//driver to enable the new server discovery and monitoring engine, providing better reliability and compatibility.

mongoose
  .connect(mongoURL, { useUnifiedTopology: true })
  .then(() => {
    // Handle successful connection
    console.log("Connected to MongoDB Atlas");
    // Start the server
    app.listen(port, () => {
      // Start the Express server and listen on the specified port
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    // Handle connection errors
    console.error("Error connecting to MongoDB Atlas:", err);
  });
