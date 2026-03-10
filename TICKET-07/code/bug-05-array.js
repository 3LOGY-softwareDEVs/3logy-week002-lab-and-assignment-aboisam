// BUG #05: Array Index Error
// DIFFICULTY: Medium
// DESCRIPTION: Off-by-one error in array access

const fruits = ["apple", "banana", "orange"];

function getLastFruit(arr) {
  return arr[arr.length-1]; // Corrected from arr.length to arr.length - 1
}

console.log("Last fruit:", getLastFruit(fruits));

// Expected Output: Last fruit: orange
