// File: 2-get_students_by_loc.js

function getStudentsByLocation(students, city) {
  // Use the filter function to get students located in the specified city
  const filteredStudents = students.filter((student) => student.location === city);

  return filteredStudents;
}

export default getStudentsByLocation;
