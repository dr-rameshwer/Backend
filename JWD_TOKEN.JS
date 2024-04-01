const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;

// Secret key for signing the token
const secretKey = "yourSecretKey";

// Example user object (this could come from a database)
const user = {
  id: 1,
  username: "example_user",
};

// Route to generate a token
app.get("/generate-token", (req, res) => {
  // Create a token using jwt.sign() method
  /*
  This block of code defines a route for handling 
  GET requests to the /generate-token endpoint. 
  When a request is made to this endpoint, it generates a JWT token using the jwt.sign() method. 
  The token includes the user object as its payload, is signed using the secretKey, 
  and expires after 1 hour. If there's an error during token generation, 
  it returns a 500 status 
  code with an error message. Otherwise, it sends the generated token as a JSON response.

  */
  jwt.sign({ user }, secretKey, { expiresIn: "1h" }, (err, token) => {
    if (err) {
      res.status(500).json({ error: "Failed to generate token" });
    } else {
      res.json({ token });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
