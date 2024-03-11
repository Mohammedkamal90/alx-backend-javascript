// File: 4-update_grade_by_city.js

function updateStudentGradeByCity(students, city, newGrades) {
  // Use filter to get students in the specific city
  const filteredStudents = students.filter((student) => student.location === city);

  // Use map to update the grades for the selected students
  const updatedStudents = filteredStudents.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });

  return updatedStudents;
}

export default updateStudentGradeByCity;
