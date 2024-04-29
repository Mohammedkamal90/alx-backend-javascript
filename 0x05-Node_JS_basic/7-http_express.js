// 7-http_express.js

const express = require('express');
const fs = require('fs').promises;
const countStudents = require('./3-read_file_async');

// Create an instance of Express
const app = express();

// Define a route for the root endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Define a route for the '/students' endpoint
app.get('/students', async (req, res) => {
  try {
    await fs.readFile(process.argv[2], 'utf8');
    res.write('This is the list of our students\n');
    await countStudents(process.argv[2]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the Express server
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the Express app
module.exports = app;
