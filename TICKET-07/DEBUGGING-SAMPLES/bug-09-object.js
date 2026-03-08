// BUG #09: Object Property Access Error
// DIFFICULTY: Medium
// DESCRIPTION: Trying to access property that doesn't exist

const student = {
  firstName: "John",
  lastName: "Doe",
  age: 20
};

function getStudentInfo(student) {
  return student.firstName + " " + student.lastname + " is " + student.age + " years old";
}

console.log(getStudentInfo(student));

// Expected Output: John Doe is 20 years old
