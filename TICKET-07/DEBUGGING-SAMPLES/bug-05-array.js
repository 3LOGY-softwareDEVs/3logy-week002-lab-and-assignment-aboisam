// BUG #05: Array Index Error
// DIFFICULTY: Medium
// DESCRIPTION: Off-by-one error in array access

const fruits = ["apple", "banana", "orange"];

function getLastFruit(arr) {
  return arr[arr.length];
}

console.log("Last fruit:", getLastFruit(fruits));

// Expected Output: Last fruit: orange
