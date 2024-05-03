const fs = require('fs');

function getStudentsList(lines, field) {
  const list = [];
  lines.forEach((line) => {
    const fields = line.split(',');
    if (fields[3].trim() === field && fields[0].trim() !== '') {
      list.push(fields[0].trim());
    }
  });
  return list.join(', ');
}

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const fieldCounts = {};

        lines.forEach((line) => {
          const fields = line.split(',');
          if (fields.length === 4 && fields[0] !== '') {
            const field = fields[3].trim();
            fieldCounts[field] = (fieldCounts[field] || 0) + 1;
          }
        });

        const totalStudents = lines.length - 1;
        console.log(`Number of students: ${totalStudents}`);

        for (const field in fieldCounts) {
          if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
            console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${getStudentsList(lines, field)}`);
          }
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
