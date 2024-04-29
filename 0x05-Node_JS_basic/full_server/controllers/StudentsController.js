import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = await readDatabase(process.argv[2]);
      res.status(200).send('This is the list of our students\n');
      Object.entries(database).forEach(([field, students]) => {
        const message = `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        res.write(message);
      });
      res.end();
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const database = await readDatabase(process.argv[2]);
      const students = database[major] || [];
      res.status(200).send(`List: ${students.join(', ')}\n`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
