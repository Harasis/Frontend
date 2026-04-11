import "./styles.css";
import json from "./data";
import { useState } from "react";

// Recursive component to render folders/files
function ShowAllFolders({
  data,
  handleExpandCollapse,
  addFolder,
  deleteElement,
}) {
  return (
    <div className="structure">
      {data?.map((fol) => (
        <span className="folder-name" key={fol?.id}>
          {/* Expand / Collapse icon (only for folders) */}
          {fol?.isFolder &&
            (fol?.isExpanded ? (
              <span
                className="btn"
                onClick={() => handleExpandCollapse(fol.id)}
              >
                🔽
              </span>
            ) : (
              <span onClick={() => handleExpandCollapse(fol.id)}>▶️</span>
            ))}

          {/* Folder / File icon */}
          {fol?.isFolder ? "📂" : "📄"}

          {/* Name */}
          {fol?.name}

          {/* Add folder button (only for folders) */}
          {fol?.isFolder && (
            <span className="btn" onClick={() => addFolder(fol.id)}>
              ➕
            </span>
          )}

          {/* Delete button */}
          <span className="btn" onClick={() => deleteElement(fol.id)}>
            🗑️
          </span>

          {/* Render children recursively if expanded */}
          {fol?.isExpanded && fol?.children?.length > 0 && (
            <ShowAllFolders
              data={fol?.children}
              handleExpandCollapse={handleExpandCollapse}
              addFolder={addFolder}
              deleteElement={deleteElement}
            />
          )}
        </span>
      ))}
    </div>
  );
}

export default function App() {
  // Main tree data (state)
  const [data, setData] = useState(json);

  // 🔽 Toggle expand/collapse
  function handleExpandCollapse(id) {
    function update(nodes) {
      return nodes.map((node) => {
        // If clicked node → toggle expand
        if (node.id === id) {
          return {
            ...node,
            isExpanded: !node.isExpanded,
          };
        }

        // Go deeper into children
        if (node.children?.length > 0) {
          return {
            ...node,
            children: update(node.children),
          };
        }

        return node;
      });
    }

    // Take previous state, update it, and set new state immutably.
    setData((prev) => update(prev));
  }

  // ➕ Add folder inside a parent
  function addFolder(parentId) {
    const folderName = window.prompt("Please enter folder name:");
    if (!folderName) return;

    function update(nodes) {
      return nodes.map((node) => {
        // If parent found → add new child
        if (node.id === parentId) {
          return {
            ...node,
            isExpanded: true, // auto open folder
            children: [
              ...(node.children || []),
              {
                id: Date.now().toString(),
                name: folderName,
                isFolder: true,
                isExpanded: false,
                children: [],
              },
            ],
          };
        }

        // Traverse deeper if not found at parent level(recursion)
        if (node.children?.length > 0) {
          return {
            ...node,
            children: update(node.children),
          };
        }

        return node;
      });
    }

    // Take previous state, update it, and set new state immutably.
    setData((prev) => update(prev));
  }

  // 🗑️ Delete a node
  function deleteElement(id) {
    function update(nodes) {
      return (
        nodes
          // Remove node with matching id
          .filter((node) => node.id !== id)
          // Traverse remaining nodes
          .map((node) => {
            if (node.children?.length > 0) {
              return {
                ...node,
                children: update(node.children),
              };
            }
            return node;
          })
      );
    }

    // Take previous state, update it, and set new state immutably.
    setData((prev) => update(prev));
  }

  return (
    <div className="App">
      <h1>🗂️ File Explorer</h1>

      {/* Root render */}
      <ShowAllFolders
        data={data}
        handleExpandCollapse={handleExpandCollapse}
        addFolder={addFolder}
        deleteElement={deleteElement}
      />
    </div>
  );
}

// ⚡ Key concepts
// Never mutate state ❌
// Always return new object ✅
// Use recursion for nested data 🌳

// 🧩 Mental model

// Think like:
// “Traverse → Find → Update → Return new tree”
