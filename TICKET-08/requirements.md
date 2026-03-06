# 📋 TICKET #08: Data Structure Challenges

**Assigned:** Thursday Week 2  
**Due:** Sunday Week 2, 11:59 PM  
**Worth:** 4 points

---

## ✅ REQUIREMENTS

Complete 15 coding challenges using arrays, objects, and sets:

### Array Challenges (5)
1. Remove duplicates from array
2. Find second largest number
3. Rotate array by N positions
4. Flatten nested array
5. Group array items by property

### Object/Dictionary Challenges (5)
6. Count character frequency in string
7. Merge two objects
8. Convert array to object  
9. Find most common word in text
10. Group students by grade

### Set Challenges (3)
11. Find intersection of two arrays
12. Find union of two arrays
13. Find difference of two arrays

### Mixed Challenges (2)
14. Implement basic phone book (object + array)
15. Shopping cart with quantities (object + methods)

---

## 📝 STARTER TEMPLATE

```javascript
// Challenge 1: Remove duplicates
function removeDuplicates(arr) {
  // TODO: Return array with unique values only
}

// Challenge 2: Second largest number
function secondLargest(numbers) {
  // TODO: Find and return second largest
}

// TODO: Implement remaining 13 challenges
```

---

## 📋 GRADING

Each challenge worth ~0.27 points.
Total: 4 points (all 15 required)

---

## 📤 SUBMISSION

1. Create `data-challenges.js` in the `TICKET-08/code/` folder
2. Implement all 15 solutions
3. Add test cases for each
4. Create `README.md` explaining your approach
5. Commit and push to GitHub
6. Check off items in `submission.md`

---

**Master data structures = Master programming!** 💾
2. Phone - $599
3. Shoes - $79
4. Novel - $15

Sorted by Price (Low to High):
1. Novel - $15
2. Shirt - $29
3. Shoes - $79
4. Phone - $599
5. Laptop - $999
```

---

## 🧪 TESTING

- [ ] Filter by "Electronics" returns 2 items
- [ ] Filter by price range $0-$100 returns 3 items
- [ ] filterInStock() excludes out-of-stock items
- [ ] Sort ascending puts cheapest first
- [ ] Sort descending puts most expensive first

---

## 💡 HINTS

**Filtering:**
```javascript
function filterByCategory(category) {
  return products.filter(product => product.category === category);
}
```

**Sorting:**
```javascript
function sortByPrice(ascending) {
  return products.sort((a, b) => {
    return ascending ? a.price - b.price : b.price - a.price;
  });
}
```

---

## 📤 SUBMISSION

1. Create `product-filter.js` in the `TICKET-08/code/` folder
2. Complete all acceptance criteria
3. Create at least 5 diverse products
4. Test all filter and sort functions
5. Commit and push to GitHub
6. Check off items in `submission.md`
