// BUG #08: String Concatenation Error
// DIFFICULTY: Easy
// DESCRIPTION: Numbers being concatenated instead of added

function addPrices(price1, price2) {
  const total = price1 + price2;
  return total;
}

const result = addPrices("10", "20");
console.log("Total price:", result);

// Expected Output: Total price: 30
// Currently outputs: Total price: 1020
