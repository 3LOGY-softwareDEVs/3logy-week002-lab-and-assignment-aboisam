// BUG #02: Variable Scope Error
// DIFFICULTY: Easy
// DESCRIPTION: Variable not accessible where it should be

function greetUser() {
  let userName = "Alice";
  console.log("Hello, " + userName);
}

greetUser();
console.log("User logged in: " + userName);

// Expected Output: 
// Hello, Alice
// User logged in: Alice
