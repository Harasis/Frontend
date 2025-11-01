import React, { useEffect } from "react";

export default function Toast({ type, message, duration, animation, onClose }) {
  // Auto-close after duration
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`toast ${type} ${animation}`}>
      {message}
      <button onClick={onClose}>×</button>
    </div>
  );
}
