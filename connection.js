// Import required modules
const express = require("express"); // Import Express.js module
const mongoose = require("mongoose"); // Import Mongoose module for MongoDB interaction

// Create Express application
const app = express(); // Create an Express application instance
const port = 3000; // Define the port number for the server

// MongoDB Atlas connection URL
const mongoURL = "UR DB Connection String Here";

// Define a Mongoose Schema for the document
const documentSchema = new mongoose.Schema({
  name: String, // Field for name, expecting string values
  age: Number, // Field for age, expecting numeric values
  email: String, // Field for email, expecting string values
});

// Define a Mongoose Model based on the schema
// Mongoose model representing MongoDB collection
const Document = mongoose.model("Document", documentSchema, "documents");

// Middleware to parse JSON bodies
app.use(express.json()); // Middleware to parse JSON-encoded request bodies

// Connect to MongoDB Atlas using Mongoose
mongoose
  .connect(mongoURL, { useUnifiedTopology: true }) // Connect to MongoDB Atlas
  .then(() => {
    // Handle successful connection

    // Define a POST route to handle inserting documents
    app.post("/documents", async (req, res) => {
      // Define a POST route to handle inserting documents
      try {
        const document = req.body;
        // Get the document data from the request body
        const createdDocument = await Document.create(document);
        // Create a new document in the database
        console.log("Inserted document:", createdDocument);
        res.status(201).send(createdDocument);
        // Send a success response to the client with the created document
      } catch (error) {
        console.error("Error inserting document:", error);
        res.status(500).send(error.message); // Send the actual error message to the client
      }
    });

    // Define a GET route to retrieve all documents
    app.get("/documents", async (req, res) => {
      // Define a GET route to retrieve all documents
      try {
        const documents = await Document.find({}); // Find all documents in the database
        console.log("Retrieved documents:", documents);
        res.status(200).send(documents); // Send a success response to the client with the retrieved documents
      } catch (error) {
        console.error("Error retrieving documents:", error);
        res.status(500).send(error.message); // Send the actual error message to the client
      }
    });

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
