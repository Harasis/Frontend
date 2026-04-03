import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import { useState } from "react";

// Utility: checks if input is a numeric value with exactly 9 digits
function hasNineDigitsAlternative(input) {
  // Ensure it's a valid number (not NaN or Infinity)
  const isNumeric = !isNaN(Number(input)) && Number.isFinite(Number(input));

  // Ensure length is exactly 9 digits
  const correctLength = String(input).length === 9;

  return isNumeric && correctLength;
}

// Utility: basic email validation using regex
function valid(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Main component
export default TabForm = () => {
  // Default form data
  const defaultData = {
    name: "Harasis",
    phone: 810722222,
    email: "harasis@gmail.com",
    interests: [],
    settings: 2,
  };

  // State: current active tab index
  const [activeTab, setActiveTab] = useState(0);

  // State: form data shared across tabs
  const [data, setData] = useState(defaultData);

  // State: validation errors
  const [error, setError] = useState({});

  // Validation function based on active tab
  function validate(activeTab) {
    const err = {};

    // Profile tab validation
    if (activeTab === 0 && (!data.name || data.name.length < 2)) {
      err.name = "Your name is not valid";
      err.id = 0;
    }

    if (activeTab === 0 && !hasNineDigitsAlternative(data.phone)) {
      err.phone = "Your phone number is not 8 digits";
      err.id = 0;
    }

    if (activeTab === 0 && !valid(data.email)) {
      err.email = "Your email is not correct";
      err.id = 0;
    }

    // Interests tab validation
    if (activeTab === 1 && data.interests.length < 1) {
      err.interests = "Add atleast 1 interest";
      err.id = 1;
    }

    // Update error state
    setError(err);

    // Return true if no errors exist
    return err.name || err.phone || err.email || err.interests ? false : true;
  }

  // Tab configuration (name + component)
  const tabs = [
    {
      name: "Profile",
      component: <Profile data={data} setData={setData} error={error} />,
    },
    {
      name: "Interests",
      component: <Interests data={data} setData={setData} error={error} />,
    },
    {
      name: "Settings",
      component: <Settings data={data} setData={setData} error={error} />,
    },
  ];

  // Handle tab click
  function handleClick(index) {
    if (index <= activeTab) {
      // Allow backward navigation freely
      setActiveTab(index);
    } else {
      // Forward navigation only after validation
      if (validate(activeTab)) {
        setActiveTab(index);
      }
    }
  }

  // Move to next tab (with validation)
  function nextClick() {
    validate(activeTab) && setActiveTab((prev) => prev + 1);
  }

  // Move to previous tab
  function prevClick() {
    setActiveTab((prev) => prev - 1);
  }

  // Final submission handler
  function submitClick() {
    alert("submitted");
  }

  return (
    <div>
      {/* Tab headers */}
      <div style={{ display: "flex" }}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              padding: "5px",
              cursor: "pointer",
            }}
            onClick={() => handleClick(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>

      {/* Active tab content */}
      <div style={{ border: "2px solid black", height: "300px" }}>
        {tabs[activeTab].component}
      </div>

      {/* Previous button (only if not first tab) */}
      <div>
        {activeTab > 0 && <button onClick={() => prevClick()}>Prev</button>}
      </div>

      {/* Next button (only if not last tab) */}
      <div>
        {activeTab < tabs.length - 1 && (
          <button onClick={() => nextClick()}>Next</button>
        )}
      </div>

      {/* Submit button (only on last tab) */}
      <div>
        {activeTab === tabs.length - 1 && (
          <button onClick={() => submitClick()}>Submit</button>
        )}
      </div>
    </div>
  );
};
