import React, { useState } from "react";
import "./styles.css";
function ChipsInput() {
  const [inputVal, setInputVal] = useState("");
  const [chips, setChips] = useState([]);

  function handleKeyDown(e) {
    if (e.key === "Enter" && inputVal.trim().length > 0) {
      setChips((prev) => [...prev, inputVal]);
      setInputVal("");
      console.log(chips);
    }
  }

  function handleClick(index) {
    const temp = [...chips];
    temp.splice(index, 1);
    setChips(temp);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />

      <div style={{ display: "flex" }}>
        {chips.map((chip, index) => (
          <div
            key={index}
            style={{
              background: "gray",
              margin: "10px",
              padding: "5px",
              color: "white",
            }}
          >
            {chip}{" "}
            <button onClick={() => handleClick(index)} style={{ color: "red" }}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
