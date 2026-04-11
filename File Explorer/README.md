# 🗂️ React File Explorer (Tree Structure)

## 📌 Overview

This project is a **File Explorer UI** built using React that supports:

* 📂 Expand / Collapse folders
* ➕ Add new folders
* 🗑️ Delete files/folders
* 🌳 Recursive tree rendering

It mimics a simplified version of a real file system.

---

## 🚀 Features

* 🔽 Expand / Collapse folders
* ➕ Add folder inside any folder
* 🗑️ Delete any file or folder
* 🌳 Recursive rendering of nested structure
* ⚡ Instant UI updates using React state

---

## 🧠 Concepts Used

### 1. Recursion

* Used to render nested folders
* Same component (`ShowAllFolders`) calls itself

---

### 2. Immutable State Updates

* State is never mutated directly
* New objects/arrays are returned

---

### 3. Tree Traversal

All operations follow this pattern:

* Traverse nodes
* Find matching node
* Update it
* Return new tree

---

### 4. React Hooks

* `useState` → manage tree data
* Functional updates → avoid stale state

---

## ⚙️ Core Functions

### 🔽 Expand / Collapse

```js
// Toggle isExpanded for clicked folder
setData((prev) => update(prev));
```

---

### ➕ Add Folder

* Finds parent node
* Adds new child to `children` array
* Automatically expands parent

---

### 🗑️ Delete Node

* Uses `filter` to remove node
* Recursively updates children

---

## 📂 Project Structure

```bash
src/
 ├── App.js          # Main logic
 ├── data.js         # Initial tree data
 ├── styles.css      # Styling
```

---

## ⚡ How It Works

1. UI renders tree using recursion
2. User interacts (expand/add/delete)
3. Function updates tree immutably
4. React re-renders updated structure

---

## 🧩 Data Structure

```js
{
  id: "1",
  name: "src",
  isFolder: true,
  isExpanded: false,
  children: []
}
```

---

## 🚧 Possible Improvements

* ✏️ Rename file/folder
* 📄 Add file support
* ⌨️ Keyboard navigation
* 💾 Persist data (localStorage / backend)
* 🔍 Search functionality
* 📁 Drag & drop

---

## 🧠 Interview Notes

* Uses **recursion + immutability**
* Demonstrates **tree data manipulation**
* Covers **real-world UI pattern (file explorer)**

👉 One-liner:

> “This is a recursive tree UI with immutable state updates for expand, add, and delete operations.”

---

## 📄 License

Free to use and modify.
