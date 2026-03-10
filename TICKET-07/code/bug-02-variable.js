// BUG #02: Variable Scope Error
// DIFFICULTY: Easy
// DESCRIPTION: Variable not accessible where it should be

 let userName = "Alice"; //user was declare was declare inside function  

function greetUser() {
  console.log("Hello, " + userName);
}

greetUser();
console.log("User logged in: " + userName);

// Expected Output: 
// Hello, Alice
// User logged in: Alice
