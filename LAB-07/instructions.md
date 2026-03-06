# 🔬 LAB 07: Bug Hunt Challenge
## Find and Fix Broken Programs

**Duration:** 30 minutes  
**Points:** 4  
**Due:** Wednesday Week 2, End of Class

---

## 🎯 LEARNING OBJECTIVES

- ✅ Identify different error types
- ✅ Read and understand error messages
- ✅ Use debugging strategies
- ✅ Fix syntax, runtime, and logical errors
- ✅ Document debugging process

---

## 📋 INSTRUCTIONS

You'll receive 5 broken programs. For each:

1. **Identify error type** (syntax, runtime, logical)
2. **Explain what's wrong**
3. **Fix the bug**
4. **Test fixed version**
5. **Document**: Bug description and solution

---

## 🐛 BUGGY PROGRAMS

### Bug #1: Syntax Error
```javascript
function greet(name) {
  console.log(`Hello, ${name}`)
// Missing closing brace

greet("Alice");
```

### Bug #2: Off-by-One Error
```javascript
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < 10; i++) {
  console.log(numbers[i]);
}
// Prints undefined for i >= 5
```

### Bug #3: Logical Error
```javascript
function isEven(n) {
  return n % 2 === 1;  // Wrong logic!
}
console.log(isEven(4));  // Should be true, returns false
```

### Bug #4: Type Conversion
```javascript
const userInput = "5";
const result = userInput + 10;  // Bug: concatenates!
console.log(result);  // "510" instead of 15
```

### Bug #5: Undefined Property
```javascript
function getFirstAndLast(items) {
  const first = items[0];
  const last = items[items.length - 1];
  return { first, last };
}

const result = getFirstAndLast([]);  // Empty array!
console.log(result);  // { first: undefined, last: undefined }
```

---

## ✅ SUBMISSION

Create document with:
- Bug number
- Error type
- Problem explanation
- Fixed code
- How you debugged it

---

## 📤 SUBMISSION

1. Create `bug-fixes.md` in the `LAB-07/code/` folder
2. Fix all 5 bugs
3. Document your debugging process
4. Commit and push to GitHub
5. Check off items in `submission.md`

---

**Debugging is a core developer skill!** 🔍
