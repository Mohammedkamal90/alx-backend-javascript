const http = require('http');
const { readFile } = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

// Function to count students from a CSV file asynchronously
function countStudents(fileName) {
  return new Promise((resolve, reject) => {
    // Initialize objects to store students and fields
    const students = {};
    const fields = {};
    let length = 0;

    // Read the CSV file
    readFile(fileName, (err, data) => {
      if (err) {
        // Reject promise if there's an error reading the file
        reject(err);
      } else {
        // Split the data into lines and process each line
        const lines = data.toString().split('\n');
        lines.forEach((line) => {
          // Skip empty lines
          if (line) {
            length += 1; // Increment the total number of students
            const field = line.split(','); // Split the line by comma
            const [name, , , fieldKey] = field; // Extract name and field key

            // Update students object
            students[fieldKey] = students[fieldKey] || [];
            students[fieldKey].push(name);

            // Update fields object
            fields[fieldKey] = (fields[fieldKey] || 0) + 1;
          }
        });

        // Generate output string
        const totalStudents = length - 1; // Exclude header line
        let output = `Number of students: ${totalStudents}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') { // Exclude 'field' key if present
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output); // Resolve promise with the output string
      }
    });
  });
}

// Create HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    // Handle root route
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    // Handle students route
    res.write('This is the list of our students\n');
    // Call countStudents function with the database file passed as argument
    countStudents(process.argv[2].toString())
      .then((output) => {
        const outString = output.slice(0, -1); // Remove trailing newline
        res.end(outString);
      })
      .catch(() => {
        // Handle error if database file cannot be loaded
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

// Start listening on specified host and port
app.listen(port, hostname);

module.exports = app; // Export the HTTP server
