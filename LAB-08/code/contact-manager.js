// Contact Management System
const contacts = [];  // Array of contact objects

//  VALIDATION HELPERS 
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidPhone(phone) {
  const regex = /^\d{10,15}$/; // digits only, length 10–15
  return regex.test(phone);
}

//  CORE FUNCTIONS 

/**
 * Add a new contact
 */
function addContact(name, phone, email, address, category = "", favorite = false) {
  if (!isValidPhone(phone)) throw new Error("Invalid phone number");
  if (!isValidEmail(email)) throw new Error("Invalid email address");

  const contact = { name, phone, email, address, category, favorite };
  contacts.push(contact);
  sortContacts(); // keep sorted
}

/**
 * View all contacts formatted
 */
function viewAllContacts() {
  return contacts.map(c =>
    `${c.name} | ${c.phone} | ${c.email} | ${c.address} | Category: ${c.category} | Favorite: ${c.favorite}`
  ).join("\n");
}

/**
 * Search by name
 */
function searchByName(name) {
  return contacts.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
}

/**
 * Search by phone
 */
function searchByPhone(phone) {
  return contacts.filter(c => c.phone === phone);
}

/**
 * Update contact by name
 */
function updateContact(name, newData) {
  const contact = contacts.find(c => c.name.toLowerCase() === name.toLowerCase());
  if (!contact) return null;
  Object.assign(contact, newData);
  sortContacts();
  return contact;
}

/**
 * Delete contact by name
 */
function deleteContact(name) {
  const index = contacts.findIndex(c => c.name.toLowerCase() === name.toLowerCase());
  if (index !== -1) {
    contacts.splice(index, 1);
    return true;
  }
  return false;
}

/**
 * Sort contacts alphabetically by name
 */
function sortContacts() {
  contacts.sort((a, b) => a.name.localeCompare(b.name));
}



/**
 * Export contacts to JSON string
 */
function exportContacts() {
  return JSON.stringify(contacts, null, 2);
}

/**
 * Import contacts from JSON string
 */
function importContacts(jsonString) {
  const imported = JSON.parse(jsonString);
  imported.forEach(c => {
    if (isValidPhone(c.phone) && isValidEmail(c.email)) {
      contacts.push(c);
    }
  });
  sortContacts();
}

/**
 * Mark contact as favorite
 */
function markFavorite(name) {
  const contact = contacts.find(c => c.name.toLowerCase() === name.toLowerCase());
  if (contact) contact.favorite = true;
}

/**
 * Get all favorite contacts
 */
function getFavorites() {
  return contacts.filter(c => c.favorite);
}

//                          DEMO 
addContact("ABOI", "08098134620", "aboisam@gmail.com", "123 Main St", "Friend");
addContact("SAMSON", "08058126652", "samson@gmail.com", "456 Elm St", "Work", true);

console.log("All Contacts:\n" + viewAllContacts());
console.log("Search by name 'ABOI':", searchByName("ABOI"));
console.log("Search by phone '08098134620':", searchByPhone("08098134620"));

updateContact("ABOI", { address: "789 Oak St", favorite: true });
console.log("Updated ABOI:", searchByName("ABOI"));

deleteContact("SAMSON");
console.log("After deleting SAMSON:\n" + viewAllContacts());

console.log("Favorites:", getFavorites());

const exported = exportContacts();
console.log("Exported JSON:\n", exported);

importContacts(exported); 
console.log("After Import:\n" + viewAllContacts());
