import { useEffect, useState } from "react";
import "./styles.css";
import ProductCard from "./components/ProductCard";
import { PAGE_SIZE } from "./constants.js";

export default function App() {
  // Stores all fetched products
  const [products, setProducts] = useState([]);

  // Tracks current active page (0-based index)
  const [activePage, setActivePage] = useState(0);

  // Fetch products from API
  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=500");

      // Handle HTTP errors
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      // Extract products array from response
      const { products } = await res.json();

      // Update state
      setProducts(products);
    } catch (error) {
      console.error(error); // Log error (can improve with UI error state)
    }
  };

  // Total number of products
  const totalProducts = products.length;

  // Total number of pages based on PAGE_SIZE
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  // Calculate start index for slicing
  const start = activePage * PAGE_SIZE;

  // Calculate end index for slicing
  const end = start + PAGE_SIZE;

  // Handle page number click
  function handleClick(n) {
    setActivePage(n);
  }

  // Go to previous page
  function handleBack() {
    setActivePage((prev) => prev - 1);
  }

  // Go to next page
  function handleNext() {
    setActivePage((prev) => prev + 1);
  }

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);

  return (
    <div className="App">
      <h1>Pagination</h1>

      {/* Pagination Controls */}
      <div className="page-id">
        {/* Previous Button */}
        <button
          className="page-btn"
          onClick={handleBack}
          disabled={activePage === 0} // Disable on first page
        >
          ◀
        </button>

        {/* Page Number Buttons */}
        {[...Array(noOfPages).keys()].map((n) => (
          <button
            key={n}
            className={`page-btn ${activePage === n ? "active" : ""}`} // Highlight active page
            onClick={() => handleClick(n)}
          >
            {n} {/* You can use n + 1 for user-friendly numbering */}
          </button>
        ))}

        {/* Next Button */}
        <button
          className="page-btn"
          onClick={handleNext}
          disabled={activePage === noOfPages - 1} // Disable on last page
        >
          ▶
        </button>
      </div>

      {/* Conditional Rendering */}
      {!products?.length ? (
        // Show message if no products
        <h2>Products List not Found!</h2>
      ) : (
        // Render paginated products
        <div className="pagination-app">
          {products.slice(start, end).map((p) => (
            <ProductCard key={p.id} title={p.title} img={p.thumbnail} />
          ))}
        </div>
      )}
    </div>
  );
}
