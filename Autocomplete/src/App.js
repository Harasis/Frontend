import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  // Stores user input from the search box
  const [input, setInput] = useState("");

  // Stores API results (list of recipes)
  const [results, setResults] = useState([]);

  // Cache object to store previous search results
  // Format: { query: [results] }
  const [cache, setCache] = useState({});

  const [showAutoComplete, setShowAutoComplete] = useState(false);

  // Function to fetch data from API or cache
  async function fetchData() {
    // If input is empty, clear results
    if (input.length === 0) {
      setResults([]);
      return;
    }

    // If result already exists in cache, use it
    if (cache[input]) {
      console.log("taking from cache", input);
      setResults(cache[input]);
      return;
    }

    // Otherwise, call API
    console.log("api called");
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();

    // Update results
    setResults(json?.recipes);

    // Store result in cache for future use
    setCache((prev) => ({
      ...prev,
      [input]: json.recipes,
    }));
  }

  // Debouncing: delay API call by 400ms after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 400);

    // Cleanup: clear previous timer on input change
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="App">
      <h2>Auto Complete</h2>

      {/* Input field */}
      <input
        type="text"
        className="search-box"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        // Triggered when input gains focus
        // Used to show the autocomplete dropdown
        // Improves UX by showing suggestions when user clicks back into input
        onFocus={() => setShowAutoComplete(true)}
        // Triggered when input loses focus
        // Used to hide the dropdown when user clicks outside
        // Prevents suggestions from staying visible unnecessarily
        onBlur={() => setShowAutoComplete(false)}
      />

      {/* Show results only if input is not empty */}
      {input?.length > 0 && showAutoComplete && (
        <div className="result-container">
          {results.length > 0 ? (
            results.map((r) => (
              <span key={r.id} className="result">
                {r.name}
              </span>
            ))
          ) : (
            <span>No Suggestions...</span>
          )}
        </div>
      )}
    </div>
  );
}
