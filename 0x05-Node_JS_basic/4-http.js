const http = require('http');

let port = 1245;

function startServer() {
  // Create HTTP server
  const app = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send response
    res.end('Hello Holberton School!\n');
  });

  // Listen on port
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
  });

  return app;
}

// Attempt to start server on an available port
function tryStartServer() {
  const server = startServer();
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      // Port is already in use, try the next port
      port += 1; // Increment port
      tryStartServer();
    } else {
      // Other error, log and exit
      console.error('Server error:', err);
      process.exit(1);
    }
  });
}

tryStartServer();

module.exports = startServer;
