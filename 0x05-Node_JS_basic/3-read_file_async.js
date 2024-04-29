// 3-read_file_async.js

const fs = require('fs');

/**
 * Counts the number of students in each field from the given CSV file asynchronously.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise} A Promise that resolves when the operation is completed successfully.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const fields = lines.shift().split(',').filter((field) => field !== 'name');
        const fieldCount = {};
        const fieldList = {};

        fields.forEach((field) => {
          fieldCount[field] = 0;
          fieldList[field] = [];
        });

        lines.forEach((line) => {
          const values = line.split(',');
          fields.forEach((field, index) => {
            if (values[index] === '1') {
              fieldCount[field] += 1;
              fieldList[field].push(values[0]);
            }
          });
        });

        console.log(`Number of students: ${lines.length}`);
        fields.forEach((field) => {
          console.log(`Number of students in ${field}: ${fieldCount[field]}. List: ${fieldList[field].join(', ')}`);
        });

        resolve();
      }
    });
  });
}

module.exports = countStudents;
