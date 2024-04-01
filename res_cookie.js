const express = require("express");
const app = express();

// Example route to demonstrate response methods
app.get("/example", (req, res) => {
  // Sets the HTTP status code of the response to 200 (OK)
  res.status(200);

  // Sets a cookie named 'username' with value 'RAMJI' and options
  res.cookie("username", "RAMJI", {
    // cookie expires after 1 hour
    maxAge: 3600000,
    // cookie is only sent over HTTPS
    secure: true,
    // cookie cannot be accessed by client-side JavaScript
    httpOnly: true,
  });

  // Sets a response header with field 'X-Custom-Header' and value 'Custom Value'
  res.set("X-Custom-Header", "Custom Value");

  // Redirects the request to '/new-location' with HTTP status code 302 (Found)
  res.redirect(302, "/new-location");

  // Clears the cookie named 'username' in the response header
  // After redirection, the cookie will be cleared in the response
  res.clearCookie("username");

  // Since we're redirecting, the following line will not be executed
  // Sets the Content-Type header to 'application/json'
  res.type("application/json");

  // Sends a JSON response with message 'This line will not be executed due to redirection'
  res.json({ message: "This line will not be executed due to redirection" });
});

// Example route to handle redirection
app.get("/new-location", (req, res) => {
  // Sends a response to the redirected request
  res.send("You have been redirected to the new location.");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
