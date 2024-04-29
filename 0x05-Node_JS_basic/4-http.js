// 4-http.js

const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response status and headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body
  res.end('Hello Holberton School!\n');
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
