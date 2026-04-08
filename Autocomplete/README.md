# 🔍 React Autocomplete Search (with Debouncing & Caching)

## 📌 Overview

This project is a simple **Autocomplete Search UI** built using React.
It fetches recipe suggestions from an API as the user types and includes optimizations like **debouncing** and **caching**.

---

## 🚀 Features

* 🔎 Real-time search suggestions
* ⏱️ Debounced API calls (reduces unnecessary requests)
* 💾 In-memory caching (improves performance)
* ⚡ Fast and responsive UI
* ❌ Handles empty input gracefully

---

## 🧠 Concepts Used

### 1. Debouncing

* API calls are delayed by **400ms**
* Prevents excessive requests while typing

### 2. Caching

* Previously searched queries are stored
* Avoids repeated API calls for same input

### 3. React Hooks

* `useState` → manage state
* `useEffect` → handle side effects (API calls)

---

## 📦 API Used

* Endpoint:
  `https://dummyjson.com/recipes/search?q=<query>`

---

## 🛠️ Installation

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
npm start
```

---

## 📂 Project Structure

```
src/
 ├── App.js
 ├── styles.css
 └── index.js
```

---

## ⚙️ How It Works

1. User types in input box
2. `useEffect` triggers after 400ms (debounce)
3. Checks cache:

   * ✅ If exists → use cached data
   * ❌ Else → call API
4. Results are displayed dynamically

---

## 🚧 Possible Improvements

* ⌨️ Keyboard navigation (arrow keys + enter)
* 🔍 Highlight matching text
* ⏳ Loading spinner
* 📱 Better mobile UI
* 🌐 Error handling for API failures

---

## 📸 Demo

Type something like:

```
chicken
```

You’ll see instant suggestions.

---

## 📄 License

This project is open-source and free to use.
