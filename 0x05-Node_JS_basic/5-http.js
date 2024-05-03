const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = 1245;

// Function to parse the CSV data and return an array of students
function parseStudents(csvData) {
  // Split data by new lines
  const lines = csvData.trim().split('\n');
  // Initialize students array
  const students = [];
  // Iterate over each line
  for (const line of lines) {
    // Split line by commas
    const fields = line.split(',');
    // Extract and trim student names
    const names = fields.map((name) => name.trim());
    // Add names to students array
    students.push(names);
  }
  return students;
}

// Function to process students list and return the number of students in each field
function getStudentsList(students) {
  // Initialize counters
  let csStudents = 0;
  let sweStudents = 0;
  // Initialize lists
  const csList = [];
  const sweList = [];
  // Iterate over students
  students.forEach((names) => {
    // Check if student is in CS or SWE
    if (names.includes('Guillaume') || names.includes('Joseph') || names.includes('Paul') || names.includes('Tommy')) {
      sweStudents += 1;
      sweList.push(...names);
    } else {
      csStudents += 1;
      csList.push(...names);
    }
  });
  // Generate response
  const response = `Number of students: ${csStudents + sweStudents}\nNumber of students in CS: ${csStudents}. List: ${csList.join(', ')}\nNumber of students in SWE: ${sweStudents}. List: ${sweList.join(', ')}`;
  return response;
}

const app = http.createServer((req, res) => {
  // Set response headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Handle different routes
  if (req.url === '/') {
    // Handle root route
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    // Handle students route
    // Read the database file asynchronously
    const databaseFile = process.argv[2]; // Get database file from command line arguments
    if (!databaseFile) {
      res.end('Error: Please provide the database file as an argument.\n');
      return;
    }
    fs.readFile(databaseFile, 'utf8', (err, data) => {
      if (err) {
        res.end(`Error: Unable to read the database file (${databaseFile}).\n`);
        return;
      }
      // Parse the data and process students list
      const students = parseStudents(data);
      const studentsList = getStudentsList(students);
      // Send response
      res.end(`This is the list of our students\n${studentsList}\n`);
    });
  } else {
    // Handle unknown routes
    res.end('404 Not Found\n');
  }
});

// Start server and listen on specified host and port
app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});

module.exports = app;
