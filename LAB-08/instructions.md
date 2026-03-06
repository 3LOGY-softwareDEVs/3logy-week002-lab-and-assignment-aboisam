# 🔬 LAB 08: Contact Management System  
## Build CLI App with Data Structures

**Duration:** 120 minutes  
**Points:** 4  
**Due:** Thursday Week 2, End of Class

---

## 🎯 LEARNING OBJECTIVES

Build console application that manages contacts using appropriate data structures.

---

## ✅ FEATURES REQUIRED

### Core Functionality:
- **Add contact** (name, phone, email, address)
- **View all contacts** (formatted list)
- **Search by name**
- **Search by phone**
- **Update contact**
- **Delete contact**

### Data Management:
- Store contacts in array of objects
- Implement search algorithms
- Sort contacts alphabetically
- Validate phone/email format

### Bonus:
- Export to JSON file
- Import from JSON file
- Category/tags for contacts
- Favorite contacts

---

## 📝 STARTER STRUCTURE

```javascript
const contacts = [];  // Array of contact objects

function addContact(name, phone, email, address) {
  const contact = { name, phone, email, address };
  contacts.push(contact);
}

function viewAllContacts() {
  // TODO: Display all contacts formatted
}

function searchByName(name) {
  // TODO: Find and return matching contacts
}

// TODO: Implement remaining functions
```

---

## 📋 REQUIREMENTS

- [ ] Add contact functionality
- [ ] View all contacts
- [ ] Search by name
- [ ] Search by phone
- [ ] Update contact
- [ ] Delete contact
- [ ] Input validation
- [ ] Proper error handling

---

## 📤 SUBMISSION

1. Create `contact-manager.js` in the `LAB-08/code/` folder
2. Implement all required features
3. Test with sample contacts
4. Commit and push to GitHub
5. Check off items in `submission.md`

---

**Build something practical you could actually use!** 📇
