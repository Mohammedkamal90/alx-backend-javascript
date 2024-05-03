const express = require('express');

const app = express();
const port = 1245;

// Endpoint for root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start listening on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
