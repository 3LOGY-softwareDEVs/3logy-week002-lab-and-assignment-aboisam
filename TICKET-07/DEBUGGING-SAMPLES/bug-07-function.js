// BUG #07: Function Call Error
// DIFFICULTY: Easy
// DESCRIPTION: Function called with wrong number of arguments

function calculateArea(length, width) {
  return length * width;
}

const area = calculateArea(10);
console.log("Area:", area);

// Expected Output: Area: 50 (assuming width should be 5)
// Fix by passing both arguments
