import React from "react";
import CheckBoxes from "./CheckBoxes";

function TreeCheckboxes({ data, handleChange }) {
  return (
    <div style={{marginLeft: "1rem", padding: "2px"}}>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <CheckBoxes  data={item} handleChange={handleChange}/>
            {item.children && item.children.length > 0 && (
              <TreeCheckboxes data={item.children} handleChange={handleChange}/>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TreeCheckboxes;
