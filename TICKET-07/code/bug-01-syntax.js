// BUG #01: Syntax Error
// DIFFICULTY: Easy
// DESCRIPTION: Find and fix the syntax error

function calculateTotal(price, quantity) {
  const total = price * quantity
  return total
}

const result = calculateTotal(10, 5) //Add closing parenthesis was missing in line 10 
console.log("Total:", result);

// Expected Output: Total: 50
