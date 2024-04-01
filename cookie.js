const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // Set a cookie named 'username' with value 'Rameshwer' and additional options
  res.cookie("username", "Rameshwer", {
    maxAge: 900000, // Expires after 15 minutes
    httpOnly: true, // Cookie is only accessible by the web server
    secure: true, // Cookie is sent only over HTTPS
  });

  // Send a response
  res.send("Cookie set successfully!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
