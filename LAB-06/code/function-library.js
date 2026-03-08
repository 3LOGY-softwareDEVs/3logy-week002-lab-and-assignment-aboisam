/**
 * Utility Library for Strings, Math, Arrays, and Validation
 * Demonstrates parameters, return values, JSDoc, DRY principle, and organization
 */

// STRING FUNCTIONS 

/**
 * Reverse a string
 * @param {string} text - The string to reverse
 * @returns {string} - The reversed string
 */
function reverseString(text) {
  return text.split("").reverse().join("");
}

/**
 * Count words in a string
 * @param {string} text - The input text
 * @returns {number} - Number of words
 */
function countWords(text) {
  return text.trim().split(/\s+/).length;
}

/**
 * Check if a string is a palindrome
 * @param {string} text - The string to check
 * @returns {boolean} - True if palindrome, false otherwise
 */
function isPalindrome(text) {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === reverseString(cleaned);
}

// -------------------- MATH FUNCTIONS --------------------

/**
 * Check if a number is prime
 * @param {number} n - The number to check
 * @returns {boolean} - True if prime, false otherwise
 */
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

/**
 * Calculate factorial of a number
 * @param {number} n - Non-negative integer
 * @returns {number} - Factorial result
 */
function factorial(n) {
  if (n < 0) throw new Error("Negative numbers not allowed");
  return n === 0 ? 1 : n * factorial(n - 1);
}

/**
 * Get nth Fibonacci number
 * @param {number} n - Position in sequence (0-based)
 * @returns {number} - Fibonacci number
 */
function fibonacci(n) {
  if (n < 0) throw new Error("Negative index not allowed");
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}

// -------------------- ARRAY FUNCTIONS --------------------

/**
 * Remove duplicates from an array
 * @param {Array} arr - Input array
 * @returns {Array} - Array with unique values
 */
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/**
 * Find median of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} - Median value
 */
function findMedian(numbers) {
  if (numbers.length === 0) throw new Error("Empty array");
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

// -------------------- VALIDATION FUNCTIONS --------------------

/**
 * Validate email format (basic)
 * @param {string} email - Email string
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Validate phone number (basic, digits only, length 10-15)
 * @param {string} phone - Phone number string
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidPhone(phone) {
  const regex = /^\d{10,15}$/;
  return regex.test(phone);
}

