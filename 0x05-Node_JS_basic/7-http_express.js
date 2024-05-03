const express = require('express');
const { countStudents } = require('./3-read_file_async');

const app = express();
const port = 1245;

// Endpoint for root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Endpoint for /students path
app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => { // Using the error variable
      console.error(error); // Log the error for debugging
      res.status(404).send('Cannot load the database');
    });
});

// Start listening on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
