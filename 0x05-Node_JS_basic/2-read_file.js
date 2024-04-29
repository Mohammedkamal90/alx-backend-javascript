// 2-read_file.js

const fs = require('fs');

/**
 * Counts the number of students in each field from the given CSV file.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data by lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Extract field names from the first line and remove the 'name' field
    const fields = lines.shift().split(',').filter((field) => field !== 'name');

    // Initialize an object to store the count of students in each field
    const fieldCount = {};

    // Initialize an object to store the list of students in each field
    const fieldList = {};

    // Loop through each field and initialize counts and lists
    fields.forEach((field) => {
      fieldCount[field] = 0;
      fieldList[field] = [];
    });

    // Loop through each line and count students in each field
    lines.forEach((line) => {
      const values = line.split(',');
      fields.forEach((field, index) => {
        if (values[index] === '1') {
          fieldCount[field] += 1;
          fieldList[field].push(values[0]);
        }
      });
    });

    // Log the number of students in each field and the list of students
    console.log(`Number of students: ${lines.length}`);
    fields.forEach((field) => {
      console.log(`Number of students in ${field}: ${fieldCount[field]}. List: ${fieldList[field].join(', ')}`);
    });
  } catch (error) {
    // Log an error message if the database is not available
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
