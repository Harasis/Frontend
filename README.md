# Pagination App

A simple React app that demonstrates **client-side pagination** using a product list fetched from an API.

## 🚀 Features

* Fetches product data from an external API
* Displays products in a paginated format
* Navigate using **Next, Previous, and page numbers**
* Highlights the active page

## 🛠️ Tech Stack

* React (Hooks)
* JavaScript / TypeScript
* CSS

## 📦 How it works

* Fetches all products from API
* Uses `PAGE_SIZE` to control items per page
* Calculates total pages dynamically
* Uses `slice(start, end)` to render current page data

## ▶️ Run locally

```bash
npm install
npm start
```

## 📁 Project Structure

* `App.js` → Main logic (pagination + data fetching)
* `ProductCard.js` → UI for each product
* `constants.js` → Pagination config (PAGE_SIZE)

## 💡 Notes

* Pagination is handled on the frontend (client-side)
* Can be extended to server-side pagination for large datasets

---
