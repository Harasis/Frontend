// Settings tab component
// Allows selecting one option using radio buttons
export default Settings = ({ data, setData }) => {
  // Updates selected radio option
  function handleClick(ind) {
    setData((prev) => ({
      ...prev, // keep existing state
      settings: ind, // update selected setting
    }));
  }

  return (
    <div>
      {/* Option 1: HTML */}
      <input
        type="radio"
        id="0"
        name="fav_language" // same name groups all radios
        value="HTML"
        checked={data.settings === 0} // controlled input
        onChange={() => handleClick(0)} // update selection
      />
      {/* ⚠️ htmlFor should match input id */}
      <label htmlFor="0">HTML</label>
      <br />

      {/* Option 2: CSS */}
      <input
        type="radio"
        id="1"
        name="fav_language"
        value="CSS"
        checked={data.settings === 1}
        onChange={() => handleClick(1)}
      />
      <label htmlFor="1">CSS</label>
      <br />

      {/* Option 3: JavaScript */}
      <input
        type="radio"
        id="2"
        name="fav_language"
        value="JavaScript"
        checked={data.settings === 2}
        onChange={() => handleClick(2)}
      />
      <label htmlFor="2">JavaScript</label>
    </div>
  );
};

// 🔑 Notes
// Radios are controlled inputs via checked
// All radios must share the same name to behave as a group
// htmlFor must match the corresponding id
// onChange is preferred over onClick for form inputs
