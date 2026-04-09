# 🔍 React Autocomplete Search (Debouncing + Caching + Focus Control)

## 📌 Overview

This project is a React-based **Autocomplete Search UI** that fetches recipe suggestions dynamically as the user types.

It includes performance optimizations like **debouncing**, **caching**, and improved UX with **focus/blur control**.

---

## 🚀 Features

* 🔎 Real-time search suggestions
* ⏱️ Debounced API calls (400ms delay)
* 💾 In-memory caching for repeated queries
* 👁️ Controlled dropdown visibility using focus/blur
* ⚡ Fast and responsive UI
* ❌ Handles empty input gracefully

---

## 🧠 Concepts Used

### 1. Debouncing

* Prevents excessive API calls while typing
* API triggers only after user pauses typing

### 2. Caching

* Stores previous search results
* Avoids redundant API calls

### 3. Focus & Blur Handling

* `onFocus` → shows suggestions when input is active
* `onBlur` → hides suggestions when user clicks outside
* Improves UI cleanliness and usability

### 4. React Hooks

* `useState` → manage UI state
* `useEffect` → handle debounced API calls

---

## 📦 API Used

* Endpoint:
  `https://dummyjson.com/recipes/search?q=<query>`

---

## 🛠️ Installation

```bash id="a1z92k"
git clone <your-repo-url>
cd <project-folder>
npm install
npm start
```

---

## 📂 Project Structure

```id="k29x0p"
src/
 ├── App.js
 ├── styles.css
 └── index.js
```

---

## ⚙️ How It Works

1. User types in the input field
2. After 400ms pause → API is triggered (debounce)
3. Cache is checked:

   * ✅ If exists → use cached data
   * ❌ Else → fetch from API
4. Results are displayed in dropdown
5. Dropdown visibility:

   * Focus → show
   * Blur → hide

---

## ⚠️ Known Limitation

* Clicking a suggestion may not work properly because `onBlur` fires before click
  👉 Can be solved using `onMouseDown` instead of `onClick`

---

## 🚧 Possible Improvements

* ⌨️ Keyboard navigation (↑ ↓ Enter)
* 🔍 Highlight matching text
* ⏳ Loading indicator
* 📱 Mobile responsiveness
* 🌐 Error handling

---

## 📸 Demo

Try typing:

```id="v8z3l1"
pizza
```

---

## 📄 License

Free to use and modify.
