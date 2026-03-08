
# Sprint Plan – Library Management System

## User Stories

### Story 1: Search Books by Title
- **Priority:** Must Have  
- **Story Points:** 3  
- **User Story:**  
  As a library patron,  
  I want to search for books by title,  
  So that I can quickly find the book I'm looking for.  

- **Acceptance Criteria:**  
  - Search input accepts text  
  - Results display matching book titles  
  - Search is case-insensitive  
  - Shows "No results" if no matches  

---

### Story 2: Borrow a Book
- **Priority:** Must Have  
- **Story Points:** 5  
- **User Story:**  
  As a library patron,  
  I want to borrow a book online,  
  So that I can reserve it before visiting the library.  

- **Acceptance Criteria:**  
  - User can click "Borrow" on available books  
  - System updates book status to "Checked Out"  
  - Confirmation message is shown  
  - Prevents borrowing if already checked out  

---

### Story 3: Return a Book
- **Priority:** Should Have  
- **Story Points:** 3  
- **User Story:**  
  As a library patron,  
  I want to return a borrowed book,  
  So that the book becomes available for others.  

- **Acceptance Criteria:**  
  - User clicks "Return" on borrowed books  
  - System updates status to "Available"  
  - Confirmation message is shown  

---

### Story 4: Track Due Dates
- **Priority:** Should Have  
- **Story Points:** 5  
- **User Story:**  
  As a library patron,  
  I want to see the due date for borrowed books,  
  So that I can avoid late fees.  

- **Acceptance Criteria:**  
  - Each borrowed book shows a due date  
  - System calculates due date based on borrowing rules  
  - Alerts user when due date is near  

---

### Story 5: Add New Books (Admin)
- **Priority:** Must Have  
- **Story Points:** 8  
- **User Story:**  
  As a librarian,  
  I want to add new books to the catalog,  
  So that patrons can access the latest titles.  

- **Acceptance Criteria:**  
  - Admin form to add book details (title, author, ISBN, category)  
  - Book appears in catalog after submission  
  - Validation for required fields  

---

### Story 6: Generate Reports (Admin)
- **Priority:** Could Have  
- **Story Points:** 5  
- **User Story:**  
  As a librarian,  
  I want to generate reports of borrowed books,  
  So that I can analyze library usage.  

- **Acceptance Criteria:**  
  - Admin can select report type (daily, monthly)  
  - Report shows number of borrowed/returned books  
  - Export option (CSV/PDF)  

---

## 🔀 MoSCoW Prioritization

| Story | Title                  | Priority   |
|-------|------------------------|------------|
| 1     | Search Books by Title  | Must Have  |
| 2     | Borrow a Book          | Must Have  |
| 3     | Return a Book          | Should Have|
| 4     | Track Due Dates        | Should Have|
| 5     | Add New Books (Admin)  | Must Have  |
| 6     | Generate Reports       | Could Have |

---

## 📊 Story Point Estimation

| Story | Title                  | Points | Justification |
|-------|------------------------|--------|---------------|
| 1     | Search Books by Title  | 3      | Simple search logic, moderate complexity |
| 2     | Borrow a Book          | 5      | Requires state change + validation |
| 3     | Return a Book          | 3      | Similar to borrow, but simpler |
| 4     | Track Due Dates        | 5      | Needs date calculations + alerts |
| 5     | Add New Books (Admin)  | 8      | Complex form validation + catalog update |
| 6     | Generate Reports       | 5      | Requires data aggregation + export |

**Total Story Points:** 29  
👉 For sprint planning, we can **defer Story 6 (Could Have)** to stay within **24 points**, which fits the 20–25 point capacity.

---

## ✅ Sprint Scope (24 Points)

- Story 1: Search Books (3)  
- Story 2: Borrow Book (5)  
- Story 3: Return Book (3)  
- Story 4: Track Due Dates (5)  
- Story 5: Add New Books (8)  

