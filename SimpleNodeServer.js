// Import the HTTP module
const myHttp = require("http");

// Define the hostname and port for the server
const myHostname = "127.0.0.1";
const myPort = 8000;

// Create HTTP server using the myHttp.createServer() method
const myServer = myHttp.createServer((myReq, myRes) => {
  // This function is executed each time a request is received by the server

  // Set the response HTTP header with HTTP status code 200 (OK)
  // and Content-Type as text/plain
  myRes.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body with the message "Welcome to XYZ\n"
  myRes.end("Welcome to LKCTC\n");
});

// Start the server to listen for incoming requests on the specified port and hostname
myServer.listen(myPort, myHostname, function () {
  // This callback function is executed once the server starts listening

  // Print a log message indicating that the server is running
  console.log(`Server running at http://${myHostname}:${myPort}/`);
});
