// BUG #03: Logic Error
// DIFFICULTY: Medium
// DESCRIPTION: Function returns wrong result

function isEven(number) {
  if (number % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

console.log("Is 4 even?", isEven(4));  // Should be true
console.log("Is 7 even?", isEven(7));  // Should be false

// Expected Output:
// Is 4 even? true
// Is 7 even? false
