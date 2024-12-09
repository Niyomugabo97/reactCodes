import React, { useState } from "react";

function CheckboxForm() {
  // Store the list of selected options (e.g., fruits the user checks)
  const [selectedOptions, setSelectedOptions] = useState([]);

  // List of fruits to show as checkboxes
  const options = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

  // Handle when a checkbox is checked or unchecked
  const handleCheckboxChange = (event) => {
    const value = event.target.value; // The value of the checkbox (fruit name)
    const checked = event.target.checked; // Whether the checkbox is checked or unchecked

    if (checked) {
      // If the checkbox is checked, add the value to the selected options
      setSelectedOptions((prev) => [...prev, value]);
    } else {
      // If the checkbox is unchecked, remove the value from selected options
      setSelectedOptions((prev) =>
        prev.filter((option) => option !== value) // Keep only items that are not the unchecked value
      );
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h1>Choose Your Favorite Fruits</h1>

      {/* Form with a list of checkboxes */}
      <form>
        {options.map((option) => (
          <div key={option} className="container">
            <label>
              {/* Each checkbox represents a fruit */}
              <input
                type="checkbox"
                value={option} // The fruit's name
                onChange={handleCheckboxChange} // Call the function when the checkbox changes
              />
              {option} {/* Show the fruit name next to the checkbox */}
            </label>
          </div>
        ))}
      </form>

      <h2>Selected Options:</h2>

      {/* Show the selected options or a message if none are selected */}
      <p>
        {selectedOptions.length > 0
          ? `You selected: ${selectedOptions.join(", ")}` // List the selected fruits
          : "No options selected."} {/* Message when no fruits are selected*/}
      </p>
    </div>
  );
}

export default CheckboxForm; // Make this component usable in other files
