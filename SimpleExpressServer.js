// Import the express module
const myExpress = require("express");
// Create an express application instance
const myApp = myExpress();
// Define the port number
const myPort = 3000;

// Define a route handler for GET requests to the root URL "/"
myApp.get("/", function (myReq, myRes) {
  // Send a response "Greetings from the server!" when this route is accessed
  myRes.send("Greetings from the LKCTC!");
});

// Start the server and make it listen for incoming requests on the specified port
myApp.listen(myPort, function () {
  // Log a message indicating that the server is up and running
  console.log(`Server is up and running on port ${myPort}!`);
});
