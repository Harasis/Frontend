import React, { useState } from "react";
import Toast from "./Toast";

// GLOBAL STATE SETTER - Direct reference to setToasts function
let addToastToState;

// EXPORT FUNCTION - Public API that directly adds toast
export function showToast(toastData) {
  if (addToastToState) {
    const newToast = { id: Date.now(), ...toastData };
    addToastToState(prev => [...prev, newToast]);
  }
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  // CONNECT GLOBAL FUNCTION - Give external access to our state setter
  addToastToState = setToasts;

  // REMOVE FUNCTION
  function removeToast(id){
        // remove toasts whose id = id in the function
        setToasts(prev => prev.filter(toast=> toast.id !== id))   
    }

  // POSITION LOGIC
  //Gets position from first toast in array (all toasts should have same position) If no toasts exist, defaults to "top-right"
  const position = toasts[0]?.position || "top-right"; 

  return (
    <div className={`toast-container ${position}`}>
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}
