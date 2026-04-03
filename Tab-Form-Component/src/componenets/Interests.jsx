import { useState } from "react";

// Interests tab component
export default function Interests({ data, setData, error }) {
  // Local state for input field
  const [inputVal, setInputVal] = useState("");

  // Add new interest
  function addInterest() {
    // Prevent adding empty values
    if (inputVal.trim().length === 0) return;

    setData((prev) => ({
      ...prev, // keep existing data
      interests: [...prev.interests, inputVal.trim()], // add new item
    }));

    setInputVal(""); // clear input after adding
  }

  // Remove interest by index
  function handleRemoveClick(index) {
    setData((prev) => ({
      ...prev,
      interests: prev.interests.filter((_, i) => i !== index), // remove selected item
    }));
  }

  return (
    <div>
      {/* Input + Add button */}
      <div style={{ padding: "5px" }}>
        <input
          type="text"
          value={inputVal} // controlled input
          onChange={(e) => setInputVal(e.target.value)} // update input state
          onKeyDown={(e) => e.key === "Enter" && addInterest()} // add on Enter
        />

        {/* FIX: pass function reference, don't call it */}
        <button onClick={addInterest}>ADD</button>
      </div>

      {/* Render all interests */}
      {data.interests.map((interest, index) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={index}
        >
          {/* Interest text */}
          <div>{interest}</div>

          {/* Remove button */}
          <button onClick={() => handleRemoveClick(index)}>X</button>
        </div>
      ))}

      {/* Validation error */}
      {error.interests && (
        <span style={{ color: "red" }}>{error.interests}</span>
      )}
    </div>
  );
}
