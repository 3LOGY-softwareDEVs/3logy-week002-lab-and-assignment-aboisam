# 🐛 Debugging Samples - Week 2 Ticket #07

These are intentionally buggy code samples for students to practice debugging.

## 📁 Files Included

| File | Bug Type | Difficulty | Description |
|------|----------|------------|-------------|
| `bug-01-syntax.js` | Syntax Error | Easy | Missing closing parenthesis |
| `bug-02-variable.js` | Scope Error | Easy | Variable used outside its scope |
| `bug-03-logic.js` | Logic Error | Medium | Incorrect conditional logic |
| `bug-04-comparison.js` | Operator Error | Easy | Assignment instead of comparison |
| `bug-05-array.js` | Index Error | Medium | Off-by-one array access |
| `bug-06-loop.js` | Infinite Loop | Medium | Missing loop increment |
| `bug-07-function.js` | Function Call | Easy | Missing function argument |
| `bug-08-string.js` | Type Coercion | Easy | String concatenation vs addition |
| `bug-09-object.js` | Property Access | Medium | Typo in property name |
| `bug-10-conditional.js` | Logic Error | Hard | Missing else-if statements |

## 📝 Instructions for Students

### For Each Bug:

1. **Read the code** - Understand what it's supposed to do
2. **Identify the bug** - What type of error is it?
3. **Fix the error** - Make minimal changes to fix it
4. **Test your fix** - Run the code to verify it works
5. **Document your process** - Write notes about:
   - What was wrong
   - How you found it
   - How you fixed it

### Testing Your Fixes

**Option 1: Run in Browser Console**
```javascript
// Copy code into browser developer tools console
// Press F12 → Console tab → Paste code → Enter
```

**Option 2: Run in Node.js**
```bash
node bug-01-syntax.js
```

**Option 3: Use VS Code Code Runner Extension**
- Install Code Runner extension
- Right-click file → "Run Code"

## ⚠️ WARNING

**Bug #06 (Infinite Loop)** will freeze your browser/terminal until you force quit!
- Fix the bug BEFORE uncommenting the function call
- Look for the missing piece in the loop

## 🎯 Learning Objectives

By completing this debugging exercise, you'll learn:
- How to read error messages effectively
- Common JavaScript mistakes and how to avoid them
- Systematic debugging strategies
- How to use console.log() for debugging
- The importance of testing your code

## 💡 Debugging Tips

### 1. Read Error Messages Carefully
```
SyntaxError: Unexpected token
ReferenceError: variable is not defined
TypeError: Cannot read property of undefined
```

### 2. Use console.log() Strategically
```javascript
console.log("Checkpoint 1 reached");
console.log("Variable value:", myVariable);
```

### 3. Comment Out Code
```javascript
// Temporarily disable code to isolate the problem
// console.log(problematicCode);
```

### 4. Check Common Issues
- Spelling mistakes in variable/property names
- Missing semicolons, brackets, or parentheses
- Wrong operators (= vs ===, && vs ||)
- Off-by-one errors in loops/arrays
- Scope issues (using variables outside their scope)

### 5. Test Incrementally
- Fix one bug at a time
- Test after each fix
- Don't try to fix everything at once

## 📚 Resources

**Mozilla Developer Network (MDN):**
- [JavaScript Errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
- [Debugging JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)

**Chrome DevTools:**
- [Debugging in Chrome](https://developer.chrome.com/docs/devtools/javascript/)

## ✅ Submission Checklist

- [ ] All 10 bugs fixed
- [ ] Each file runs without errors
- [ ] Debugging notes document created
- [ ] Personal debugging checklist created
- [ ] Reflection written
- [ ] All files committed to Git
- [ ] Repository pushed to GitHub

## 🎓 Instructor Notes

**Solutions are in separate folder (don't share with students until after deadline!)**

**Common Student Struggles:**
- Bug #06: Students might run infinite loop and freeze browser
- Bug #08: Understanding string vs number addition
- Bug #10: Realizing they need else-if, not just if

**Grading Rubric:**
- 10 bugs fixed (7 points) = 0.7 points each
- Debugging checklist (2 points)
- Reflection (1 point)

---

**Happy Debugging! 🐛➡️✅**
