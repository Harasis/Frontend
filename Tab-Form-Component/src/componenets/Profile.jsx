// Profile tab component
// Receives:
// - data → current form values
// - setData → function to update form state
// - error → validation errors for fields
export default Profile = ({ data, setData, error }) => {
  // Generic change handler for all inputs
  function handleChange(e, field) {
    setData((prev) => ({
      ...prev, // keep existing fields
      [field]: e.target.value, // update only the changed field
    }));
  }

  // Debug: logs current error object
  console.log(error);

  return (
    <div style={{ marginTop: "1rem" }}>
      {/* Name field */}
      <div className="profile-tabs">
        <label>Name : </label>
        <input
          type="text"
          value={data.name} // controlled input
          onChange={(e) => handleChange(e, "name")} // update name in state
        />
        {/* Show validation error if exists */}
        {error.name && <span style={{ color: "red" }}>{error.name}</span>}
      </div>

      {/* Phone field */}
      <div className="profile-tabs">
        <label>Phone : </label>
        <input
          value={data.phone} // controlled input
          type="text"
          onChange={(e) => handleChange(e, "phone")} // update phone in state
        />
        {/* Show validation error if exists */}
        {error.phone && <span style={{ color: "red" }}>{error.phone}</span>}
      </div>

      {/* Email field */}
      <div className="profile-tabs">
        <label>Email : </label>
        <input
          value={data.email} // controlled input
          type="text"
          onChange={(e) => handleChange(e, "email")} // update email in state
        />
        {/* Show validation error if exists */}
        {error.email && <span style={{ color: "red" }}>{error.email}</span>}
      </div>
    </div>
  );
};
