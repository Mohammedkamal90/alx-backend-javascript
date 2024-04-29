// 5-http.js

const http = require('http');
const fs = require('fs');
const { promisify } = require('util');
const countStudents = require('./3-read_file_async');

// Promisify fs.readFile for asynchronous file reading
const readFileAsync = promisify(fs.readFile);

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Parse the URL path
  const url = req.url;

  // Define routes based on the URL path
  if (url === '/') {
    // Handle the root endpoint
    res.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    // Handle the /students endpoint
    try {
      const data = await readFileAsync(process.argv[2], 'utf8');
      res.write('This is the list of our students\n');
      await countStudents(process.argv[2]);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    // Handle other endpoints
    res.end('Not Found\n');
  }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
