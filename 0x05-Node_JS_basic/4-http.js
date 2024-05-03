const http = require('http');

const host = '127.0.0.1';
let port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

// Function to start the server on an available port
function startServer() {
  app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}/`);
  });

  // Handle 'error' event
  app.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is already in use. Trying the next port...`);
      port++;
      startServer(); // Try starting the server on the next port
    } else {
      console.error('Server error:', err);
      process.exit(1);
    }
  });
}

// Start the server
startServer();

module.exports = app;
