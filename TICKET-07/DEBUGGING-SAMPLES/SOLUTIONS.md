# 🔧 DEBUGGING SAMPLES - SOLUTIONS
# FOR INSTRUCTOR USE ONLY - DO NOT SHARE WITH STUDENTS UNTIL AFTER DEADLINE!

## Bug #01: Syntax Error
**Problem:** Missing closing parenthesis on line 8
**Fix:** Add closing parenthesis
```javascript
const result = calculateTotal(10, 5);  // Added )
```

---

## Bug #02: Variable Scope Error
**Problem:** userName is declared inside function (local scope), not accessible outside
**Fix:** Move userName declaration outside function or return it
```javascript
let userName = "Alice";  // Move outside function

function greetUser() {
  console.log("Hello, " + userName);
}

greetUser();
console.log("User logged in: " + userName);
```

---

## Bug #03: Logic Error
**Problem:** Logic is inverted - returns true when number is odd
**Fix:** Change === 1 to === 0 (or flip true/false)
```javascript
function isEven(number) {
  if (number % 2 === 0) {  // Changed 1 to 0
    return true;
  } else {
    return false;
  }
}
```

---

## Bug #04: Comparison Operator Error
**Problem:** Using assignment (=) instead of comparison (===)
**Fix:** Change = to ===
```javascript
function checkPassword(password) {
  if (password === "secret123") {  // Changed = to ===
    return "Access granted";
  } else {
    return "Access denied";
  }
}
```

---

## Bug #05: Array Index Error
**Problem:** arr.length is one past the last index (arrays are zero-indexed)
**Fix:** Use arr.length - 1
```javascript
function getLastFruit(arr) {
  return arr[arr.length - 1];  // Subtract 1
}
```

---

## Bug #06: Infinite Loop
**Problem:** Missing increment statement, i never increases
**Fix:** Add i++ inside loop
```javascript
function countToTen() {
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;  // Add this line
  }
}
```

---

## Bug #07: Function Call Error
**Problem:** Function expects 2 arguments, only 1 provided
**Fix:** Pass both arguments
```javascript
const area = calculateArea(10, 5);  // Add second argument
```

---

## Bug #08: String Concatenation Error
**Problem:** Arguments are strings, so + concatenates instead of adds
**Fix:** Convert strings to numbers using Number() or parseInt()
```javascript
function addPrices(price1, price2) {
  const total = Number(price1) + Number(price2);  // Convert to numbers
  return total;
}

// OR fix at the call site:
const result = addPrices(10, 20);  // Remove quotes
```

---

## Bug #09: Object Property Access Error
**Problem:** Typo in property name - "lastname" should be "lastName" (camelCase)
**Fix:** Fix capitalization
```javascript
function getStudentInfo(student) {
  return student.firstName + " " + student.lastName + " is " + student.age + " years old";
  // Changed lastname to lastName
}
```

---

## Bug #10: Complex Logic Error
**Problem:** Missing else-if statements - only first condition is checked, then else catches everything
**Fix:** Change if to else if for subsequent conditions
```javascript
function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {  // Add else if
    return "B";
  } else if (score >= 70) {  // Add else if
    return "C";
  } else if (score >= 60) {  // Add else if
    return "D";
  } else {
    return "F";
  }
}
```

---

## Grading Notes

**Bug Difficulty Breakdown:**
- **Easy (5 bugs):** #01, #02, #04, #07, #08
- **Medium (4 bugs):** #03, #05, #06, #09
- **Hard (1 bug):** #10

**Common Student Mistakes:**
1. Bug #06: Running the infinite loop before fixing it (freezes browser)
2. Bug #08: Not understanding type coercion (strings vs numbers)
3. Bug #10: Not realizing that plain if statements don't create cascading logic

**Teaching Moment:**
After students submit, discuss:
- **Prevention:** How to avoid these bugs in first place
- **Detection:** How to read error messages
- **Tools:** Using debugger, console.log(), browser DevTools

**Full Credit (10 points):**
- All 10 bugs fixed correctly (7 points)
- Debugging checklist shows thoughtful reflection (2 points)
- Reflection demonstrates learning (1 point)
