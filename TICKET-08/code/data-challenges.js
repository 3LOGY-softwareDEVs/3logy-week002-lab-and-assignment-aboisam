// Challenge 1: Remove duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Challenge 2: Second largest number
function secondLargest(numbers) {
  let unique = [...new Set(numbers)];
  unique.sort((a, b) => b - a);
  return unique[1] ?? null;
}

// Challenge 3: Rotate array by N positions
function rotateArray(arr, n) {
  n = n % arr.length;
  return arr.slice(-n).concat(arr.slice(0, -n));
}

// Challenge 4: Flatten nested array
function flattenArray(arr) {
  return arr.flat(Infinity);
}

// Challenge 5: Group array items by property
function groupBy(arr, prop) {
  return arr.reduce((acc, item) => {
    let key = item[prop];
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}


//Object/ Dictionary challenge 
// Challenge 6: Count character frequency in string
function charFrequency(str) {
  return [...str].reduce((freq, char) => {
    freq[char] = (freq[char] || 0) + 1;
    return freq;
  }, {});
}

// Challenge 7: Merge two objects
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// Challenge 8: Convert array to object
function arrayToObject(arr) {
  return arr.reduce((obj, item, index) => {
    obj[index] = item;
    return obj;
  }, {});
}

// Challenge 9: Find most common word in text
function mostCommonWord(text) {
  let words = text.toLowerCase().match(/\w+/g);
  let freq = {};
  for (let w of words) freq[w] = (freq[w] || 0) + 1;
  return Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0];
}

// Challenge 10: Group students by grade
function groupStudents(students) {
  return students.reduce((acc, s) => {
    if (!acc[s.grade]) acc[s.grade] = [];
    acc[s.grade].push(s.name);
    return acc;
  }, {});
}


//set challenge
// Challenge 11: Intersection of two arrays
function intersection(arr1, arr2) {
  return [...new Set(arr1)].filter(x => new Set(arr2).has(x));
}

// Challenge 12: Union of two arrays
function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

// Challenge 13: Difference of two arrays
function difference(arr1, arr2) {
  return [...new Set(arr1)].filter(x => !new Set(arr2).has(x));
}


//mixed challenges
// Challenge 14: Basic phone book
class PhoneBook {
  constructor() {
    this.contacts = {};
  }
  addContact(name, number) {
    this.contacts[name] = number;
  }
  getNumber(name) {
    return this.contacts[name] || null;
  }
  listContacts() {
    return Object.entries(this.contacts);
  }
}

// Challenge 15: Shopping cart with quantities
class ShoppingCart {
  constructor() {
    this.items = {};
  }
  addItem(product, qty = 1) {
    this.items[product] = (this.items[product] || 0) + qty;
  }
  removeItem(product, qty = 1) {
    if (this.items[product]) {
      this.items[product] -= qty;
      if (this.items[product] <= 0) delete this.items[product];
    }
  }
  getTotalItems() {
    return Object.values(this.items).reduce((a, b) => a + b, 0);
  }
  listCart() {
    return this.items;
  }
}

console.log(removeDuplicates([1,2,2,3,4,4])); 
console.log(secondLargest([10, 5, 8, 10]));   
console.log(rotateArray([1,2,3,4,5], 2));     
console.log(flattenArray([1,[2,[3,4]],5]));   
console.log(groupBy([{name:"A",age:20},{name:"B",age:20},{name:"C",age:21}], "age"));


let pb = new PhoneBook();
pb.addContact("Alice","12345");
console.log(pb.getNumber("Alice")); 

let cart = new ShoppingCart();
cart.addItem("Apple",2);
cart.addItem("Banana",3);
console.log(cart.listCart()); 

