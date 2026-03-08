/**
 *  Calculator with Memory and History
 * Supports: add, subtract, multiply, divide, exponent, square root
 * Features: memory store/recall/clear, history tracking
 * valueX and valueY are the two operands for the operations in the functions
 */

// Core Operations

function add(valueX, ValueY) {
  const result = valueX + ValueY;
  addToHistory(`add(${valueX}, ${ValueY}) = ${result}`);
  return result;
}

function subtract(valueX, ValueY) {
  const result = valueX - ValueY;
  addToHistory(`subtract(${valueX}, ${ValueY}) = ${result}`);
  return result;
}

function multiply(valueX, ValueY) {
  const result = valueX * ValueY;
  addToHistory(`multiply(${valueX}, ${ValueY}) = ${result}`);
  return result;
}

function divide(valueX, ValueY) {
  if (ValueY === 0) throw new Error("Division by zero");
  const result = valueX / ValueY;
  addToHistory(`divide(${valueX}, ${ValueY}) = ${result}`);
  return result;
}

function exponent(valueX, ValueY) {
  const result = Math.pow(valueX, ValueY);
  addToHistory(`exponent(${valueX}, ${ValueY}) = ${result}`);
  return result;
}

function squareRoot(value) {
  if (value < 0) throw new Error("Square root of negative number");
  const result = Math.sqrt(value);
  addToHistory(`squareRoot(${value}) = ${result}`);
  return result;
}

// Memory Feature 

let memory = null;

function storeMemory(value) {
  memory = value;
  addToHistory(`storeMemory(${value})`);
}

function recallMemory() {
  addToHistory(`recallMemory() = ${memory}`);
  return memory;
}

function clearMemory() {
  memory = null;
  addToHistory("clearMemory()");
}

// History Feature 

let history = [];

function addToHistory(entry) {
  history.unshift(entry);
  if (history.length > 10) history.pop();
}

function displayHistory() {
  return history;
}

function clearHistory() {
  history = [];
}


// Perform some operations
const result1 = add(5, 3);          
storeMemory(result1);             
const result2 = multiply(recallMemory(), 2); 
const result3 = squareRoot(result2); 

console.log("Results:", result1, result2, result3);
console.log("History:", displayHistory());          
