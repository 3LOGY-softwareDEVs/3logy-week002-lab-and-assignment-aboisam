# 🔬 LAB 06: Function Library Building
## Build Reusable Utility Functions

**Duration:** 45 minutes  
**Points:** 4  
**Due:** Tuesday Week 2, End of Class

---

## 🎯 LEARNING OBJECTIVES

Create JavaScript file with at least 10 useful utility functions demonstrating:
- Parameters and return values
- JSDoc documentation
- DRY principle
- Code organization

---

## 📋 REQUIRED FUNCTIONS

### String Functions (3 required)
- `reverseString(text)` - Reverse a string
- `countWords(text)` - Count words in text
- `isPalindrome(text)` - Check if reads same backwards

### Math Functions (3 required)
- `isPrime(n)` - Check if number is prime
- `factorial(n)` - Calculate factorial
- `fibonacci(n)` - Return nth Fibonacci number

### Array Functions (2 required)
- `removeDuplicates(arr)` - Remove duplicate items
- `findMedian(numbers)` - Find median value

### Validation Functions (2 required)
- `isValidEmail(email)` - Basic email validation
- `isValidPhone(phone)` - Basic phone validation

---

## 📝 STARTER TEMPLATE

```javascript
/**
 * Reverse a string
 * @param {string} text - Input string
 * @returns {string} Reversed string
 * @example
 * reverseString("hello"); // "olleh"
 */
function reverseString(text) {
  return text.split('').reverse().join('');
}

// TODO: Add 9 more functions with JSDoc
```

---

## ✅ REQUIREMENTS

- [ ] At least 10 functions implemented
- [ ] Each has JSDoc comment
- [ ] Each has usage example
- [ ] All functions tested
- [ ] Code committed to Git

---

## 📤 SUBMISSION

1. Create `function-library.js` in the `LAB-06/code/` folder
2. Complete all 10+ functions
3. Test each function with examples
4. Commit and push to GitHub
5. Check off items in `submission.md`

---

**You're building a professional code library!** 📚
