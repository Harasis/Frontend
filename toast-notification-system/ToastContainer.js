// Flow:

// External call: showToast({type: 'success', message: 'Done!'})
// Add to state: Creates toast with ID, adds to array
// Re-render: Component updates, shows new toast
// Auto-remove: Toast expires or user clicks X
// Clean up: Toast removed from array, disappears

// In essence: A container that holds and manages all toast notifications with a simple external API.





import React, { useState } from "react";
import Toast from "./Toast";

// GLOBAL FUNCTION VARIABLE - Allows external components to trigger toasts
let showToastFunction;

// EXPORT FUNCTION - Public API to create toasts from anywhere in app
export function showToast(toastData) {
  if (showToastFunction) showToastFunction(toastData);
}

export default function ToastContainer() {
  // STATE - Array of all currently visible toasts
  const [toasts, setToasts] = useState([]);

  // SETUP GLOBAL FUNCTION - Connect external showToast() to internal state
  showToastFunction = (toastData) => {
    const newToast = { id: Date.now(), ...toastData }; // Add unique ID + spread toast data
    setToasts((prev) => [...prev, newToast]); // Add to existing toasts
  };

  // REMOVE FUNCTION - Delete toast by ID when closed or expired
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // POSITION LOGIC - Use first toast's position for entire container
  // Falls back to "top-right" if no toasts exist
  const position = toasts[0]?.position || "top-right";

  return (
    // {/* CONTAINER - Positioned div that holds all toasts */}
    <div className={`toast-container ${position}`}>
      {/* RENDER TOASTS - Map each toast to Toast component */}
      {toasts.map((toast) => (
        <Toast
          key={toast.id} // React key for re-rendering
          {...toast} // Spread all toast properties (type, message, etc.)
          onClose={() => removeToast(toast.id)} // Pass remove function
        />
      ))}
    </div>
  );
}
