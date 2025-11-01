import React from "react";
import ToastContainer, { showToast } from "./ToastContainer";
import "./Toast.css";

export default function App() {
  const handleShowToast = (type) => {
    showToast({
      type,
      message: `This is a ${type} message!`,
      duration: 30000,
      position: "top-right",
      animation: "pop",
    });
  };

  return (
    <div className="app">
      <h2>React Toast Example</h2>
      <div>
        <button onClick={() => handleShowToast("success")}>Success</button>
        <button onClick={() => handleShowToast("info")}>Info</button>
        <button onClick={() => handleShowToast("warning")}>Warning</button>
        <button onClick={() => handleShowToast("error")}>Error</button>
      </div>
      <ToastContainer />
    </div>
  );
}
