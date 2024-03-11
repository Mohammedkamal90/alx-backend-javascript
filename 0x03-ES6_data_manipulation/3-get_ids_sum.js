// File: 3-get_ids_sum.js

function getStudentIdsSum(students) {
  // Use the reduce function to calculate the sum of student ids
  const sum = students.reduce((acc, student) => acc + student.id, 0);

  return sum;
}

export default getStudentIdsSum;
