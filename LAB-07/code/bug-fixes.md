

#  Debugging Report – Library of Broken Programs

## Bug #1: Syntax Error

**Error Type:** Syntax Error  
**Problem Explanation:** The function `greet` is missing a closing brace `}` after the `console.log` statement. This prevents the code from compiling.  

**Fixed Code:**
```javascript
function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("Alice");
```

**Debugging Process:**  
- Ran the code → saw "Unexpected end of input" error.  
- Checked braces → found missing closing brace.  
- Added `}` → program runs correctly.  

---

## Bug #2: Off-by-One Error

**Error Type:** Logical Error (off-by-one)  
**Problem Explanation:** The loop runs from `i = 0` to `i < 10`, but the array has only 5 elements. Accessing beyond index 4 prints `undefined`.  

**Fixed Code:**
```javascript
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

**Debugging Process:**  
- Observed `undefined` values after index 4.  
- Realized loop condition should be `i < numbers.length`.  
- Changed loop condition → prints only valid elements.  

---

## Bug #3: Logical Error

**Error Type:** Logical Error  
**Problem Explanation:** The function `isEven` incorrectly checks `n % 2 === 1`, which actually detects odd numbers.  

**Fixed Code:**
```javascript
function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(4));  // true
```

**Debugging Process:**  
- Tested with `isEven(4)` → returned false.  
- Checked logic → realized condition was reversed.  
- Corrected to `n % 2 === 0`.  

---

## Bug #4: Type Conversion

**Error Type:** Runtime/Logical Error  
**Problem Explanation:** Adding a string `"5"` to a number `10` results in string concatenation `"510"`.  

**Fixed Code:**
```javascript
const userInput = "5";
const result = Number(userInput) + 10;
console.log(result);  // 15
```

**Debugging Process:**  
- Saw output `"510"`.  
- Realized JavaScript treats `"5"` as string.  
- Converted input to number using `Number()`.  

---

## Bug #5: Undefined Property

**Error Type:** Logical Error  
**Problem Explanation:** Calling `getFirstAndLast([])` on an empty array returns `{ first: undefined, last: undefined }`. Needs handling for empty arrays.  

**Fixed Code:**
```javascript
function getFirstAndLast(items) {
  if (items.length === 0) {
    return { first: null, last: null };
  }
  const first = items[0];
  const last = items[items.length - 1];
  return { first, last };
}

const result = getFirstAndLast([]);
console.log(result);  // { first: null, last: null }
```

**Debugging Process:**  
- Tested with empty array → saw `undefined`.  
- Added condition to handle empty arrays.  
- Returned `{ first: null, last: null }` for clarity.  

---

# ✅ Summary

- **Syntax errors**: Fixed by adding missing braces.  
- **Off-by-one errors**: Fixed by using `array.length`.  
- **Logical errors**: Corrected wrong conditions.  
- **Type conversion issues**: Fixed by explicit casting.  
- **Undefined values**: Fixed by handling edge cases.  
