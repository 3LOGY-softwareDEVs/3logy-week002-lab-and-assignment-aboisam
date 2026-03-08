// BUG #06: Infinite Loop
// DIFFICULTY: Medium
// DESCRIPTION: Loop never terminates (WARNING: Will freeze browser!)

function countToTen() {
  let i = 1;
  while (i <= 10) {
    console.log(i);
    // Missing increment
  }
}

// COMMENT OUT THE FUNCTION CALL BELOW UNTIL YOU FIX THE BUG!
// countToTen();

// Expected Output: 1 2 3 4 5 6 7 8 9 10
