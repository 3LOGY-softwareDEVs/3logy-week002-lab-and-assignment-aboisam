// BUG #04: Comparison Operator Error
// DIFFICULTY: Easy
// DESCRIPTION: Wrong comparison operator used

function checkPassword(password) {
  if (password = "secret123") {
    return "Access granted";
  } else {
    return "Access denied";
  }
}

console.log(checkPassword("secret123"));  // Should be "Access granted"
console.log(checkPassword("wrong"));      // Should be "Access denied"

// Expected Output:
// Access granted
// Access denied
