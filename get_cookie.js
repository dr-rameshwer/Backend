const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
  // Set a cookie for demonstration
  res.cookie("username", "Ramji");

  // Get the cookie data from the request
  const username = req.cookies.username;

  // Print the cookie data
  console.log("Username is:", username);

  // Send a response
  res.send("Cookie data printed in the console!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
