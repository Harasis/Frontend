import DropDown from "./DropDown";
import { useState } from "react";

function App() {
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-2">Choose A Fruit</h1>
      <DropDown
        list={["apple", "mango", "banana"]}
        selected={selectedFruit}
        setSelected={setSelectedFruit}
      />
      {selectedFruit && (
        <p className="mt-4 text-gray-700">You Selected: {selectedFruit}</p>
      )}
    </div>
  );
}

export default App;
