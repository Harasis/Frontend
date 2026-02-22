import { useState } from "react";
import treeData from "./data";
import TreeCheckboxes from "./TreeCheckboxes";
import { STATUS } from "./constants";

function App() {
  const [checkboxState, setCheckboxState] = useState(treeData);

  function computeStatus(node) {
    if (!node.children || node.children.length === 0) {
      return;
    }
    let checkedCount = 0;
    let uncheckedCount = 0;
    let indeterminateCount = 0;

    node?.children?.forEach((child) => {
      if (child.status === STATUS.CHECKED) checkedCount += 1;
      if (child.status === STATUS.UNCHECKED) uncheckedCount += 1;
      if (child.status === STATUS.INDETERMINATE) indeterminateCount += 1;
    });

    if (checkedCount === node.children.length) {
      node.status = STATUS.CHECKED;
    } else if (uncheckedCount === node.children.length) {
      node.status = STATUS.UNCHECKED;
    } else if (checkedCount > 0 || indeterminateCount > 0) {
      node.status = STATUS.INDETERMINATE;
    }
  }

  function traverse(node, targetId, isDescendent = false, parentStatus) {
    if (node.id === targetId) {
      node.status =
        node.status === STATUS.CHECKED ? STATUS.UNCHECKED : STATUS.CHECKED;
    }

    if (isDescendent) {
      node.status = parentStatus;
    }

    //if not the node we have clicked then we go to its children
    if (node.children && node.children.length > 0) {
      node.children.forEach((child) => {
        traverse(
          child,
          targetId,
          node.id === targetId || isDescendent,
          node.status,
        );
      });
    }
    computeStatus(node);
  }

  function handleChange(id) {
    const cloneCheckBoxState = JSON.parse(JSON.stringify(checkboxState));
    cloneCheckBoxState.forEach((root) => {
      traverse(root, id);
    });

    setCheckboxState(cloneCheckBoxState);
  }

  return (
    <>
      <TreeCheckboxes data={checkboxState} handleChange={handleChange} />
    </>
  );
}

export default App;

// HandleChange()
// Traverse -> 
// 1. Give Check/Uncheck functionality, 
// 2. Check Descendent and Give Status of ancestor (top to down)
// 3. computeStatus() -> now (down to top), Give the status to Parent based on the status of children -  by counting the number of checked and unchecked and ideterminant childrens
