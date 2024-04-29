import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const result = {};
      lines.forEach((line) => {
        const [firstname] = line.split(',');
        const field = 'Field'; // Assuming the field name
        if (!result[field]) {
          result[field] = [];
        }
        result[field].push(firstname);
      });
      resolve(result);
    }
  });
});

export default readDatabase;
