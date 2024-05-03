const express = require('express');
const { readFile } = require('fs').promises;

const app = express();
const port = 1245;

// Function to count students from CSV file
async function countStudents(fileName) {
  try {
    const students = {};
    const fields = {};
    let length = 0;
    const data = await readFile(fileName, 'utf8');
    const lines = data.split('\n');

    lines.forEach((line) => {
      if (line) {
        length += 1; // Increment length
        const field = line.split(',');
        const [student, , , fieldOfStudy] = field;
        students[fieldOfStudy] = students[fieldOfStudy] || [];
        students[fieldOfStudy].push(student);
        fields[fieldOfStudy] = (fields[fieldOfStudy] || 0) + 1;
      }
    });

    let output = `Number of students: ${length}\n`;
    for (const [field, count] of Object.entries(fields)) {
      if (field !== '') {
        output += `Number of students in ${field}: ${count}. `;
        output += `List: ${students[field].join(', ')}\n`;
      }
    }
    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Route to handle requests to "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route to handle requests to "/students"
app.get('/students', async (req, res) => {
  try {
    const studentsData = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${studentsData}`);
  } catch (error) {
    res.status(404).send('This is the list of our students\nCannot load the database');
  }
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;
