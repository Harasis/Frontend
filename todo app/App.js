import "./styles.css";
import { useState } from "react";

export default function App() {
  // State for input field
  const [input, setInput] = useState("");

  // State for storing todo items
  const [list, setList] = useState([]);

  // Add a new todo item
  function handleAdd() {
    const item = {
      id: list.length + 1,
      label: input,
      checked: false,
    };

    setList((prev) => [...prev, item]);
    setInput("");
  }

  // Toggle completed status of a todo
  function toggleChecked(id) {
    setList(
      list.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            checked: !t.checked,
          };
        }
        return t;
      })
    );
  }

  // Remove a todo item
  function handleDelete(id) {
    setList(
      list.filter((t) => {
        return t.id !== id;
      })
    );
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      {/* Input for entering todo text */}
      <input
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Add new todo */}
      <button onClick={handleAdd}>Add</button>

      <ul>
        {/* Render all todos */}
        {list.map((todo) => (
          <li key={todo.id}>
            {/* Mark todo as completed */}
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => toggleChecked(todo.id)}
            />

            {/* Apply strike-through style if completed */}
            <span className={todo.checked ? "line-through" : ""}>
              {todo.label}
            </span>

            {/* Delete todo */}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
