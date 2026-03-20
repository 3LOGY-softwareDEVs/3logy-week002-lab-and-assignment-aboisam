// BUG #10: Complex Logic Error
// DIFFICULTY: Hard
// DESCRIPTION: Grade calculator has flawed logic

function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  }
  if (score >= 80) {
    return "B";
  }
  if (score >= 70) {
    return "C";
  }
  if (score >= 60) {
    return "D";
  }
  else {
    return "F";
  }
}

console.log("Score 95:", calculateGrade(95));  // Should be A
console.log("Score 85:", calculateGrade(85));  // Should be B
console.log("Score 75:", calculateGrade(75));  // Should be C
console.log("Score 65:", calculateGrade(65));  // Should be D
console.log("Score 55:", calculateGrade(55));  // Should be F

// Expected Output:
// Score 95: A
// Score 85: B
// Score 75: C
// Score 65: D
// Score 55: F
