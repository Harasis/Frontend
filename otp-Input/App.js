import "./styles.css";
import { useState, useRef, useEffect } from "react";

const OTP_DIGITS = 5;

export default function App() {
  // Stores OTP digits as an array
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS).fill(""));

  // Stores references to all input elements
  const refArr = useRef([]);

  // Focus first input when component mounts
  useEffect(() => {
    refArr?.current[0]?.focus();
  }, []);

  function handleOnChnage(value, index) {
    // Allow only numeric input
    if (isNaN(value)) return;

    const newVal = value.trim();
    const newArr = [...inputArr];

    // Keep only the last entered character
    newArr[index] = newVal.slice(-1);
    setInputArr(newArr);

    // Move focus to next input after entry
    newVal && refArr?.current[index + 1]?.focus();
  }

  function handleOnKeyDown(e, index) {
    // Move focus back when Backspace is pressed on an empty field
    if (!e.target.value && e.key === "Backspace") {
      refArr?.current[index - 1]?.focus();
    }
  }

  return (
    <div className="App">
      <h1>OTP Input</h1>

      {inputArr.map((input, index) => (
        <input
          key={index}
          className="otp-box"
          type="text"
          value={inputArr[index]}
          // Save reference of each input
          ref={(input) => {
            refArr.current[index] = input;
          }}
          onChange={(e) => handleOnChnage(e.target.value, index)}
          onKeyDown={(e) => handleOnKeyDown(e, index)}
        />
      ))}
    </div>
  );
}
