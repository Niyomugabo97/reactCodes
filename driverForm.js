// Import React library and the useState hook for managing state
import React, { useState } from "react";

// Define the styling for the form and its elements using CSS-in-JS
const styles = {
  // Main container styling for layout and appearance
  container: {
    width: "400px", // Set container width
    margin: "20px auto", // Center the container and add top/bottom margin
    padding: "20px", // Add padding inside the container
    border: "1px solid #ccc", // Light gray border
    borderRadius: "8px", // Rounded corners
    backgroundColor: "#f9f9f9", // Light gray background color
  },
  // Styling for the form header
  header: {
    textAlign: "center", // Center align text
    marginBottom: "20px", // Space below the header
    color: "#333", // Dark text color
  },
  // Styling for the form layout
  form: {
    display: "flex", // Use flexbox layout
    flexDirection: "column", // Stack items vertically
  },
  // Styling for each form field container
  field: {
    marginBottom: "15px", // Space below each field
  },
  // Styling for input fields
  input: {
    width: "100%", // Input takes full width of its container
    padding: "8px", // Inner padding for comfortable typing
    margin: "5px 0", // Small margin around inputs
    borderRadius: "4px", // Rounded corners
    border: "1px solid #ccc", // Light gray border
  },
  // Styling for the submit button
  button: {
    width: "100%", // Button takes full width of the container
    padding: "10px 20px", // Inner padding for better button size
    backgroundColor: "#007bff", // Blue background color
    color: "white", // White text
    border: "none", // Remove default border
    borderRadius: "4px", // Rounded corners
    cursor: "pointer", // Pointer cursor on hover
  },
  // Styling for error messages
  error: {
    color: "red", // Red text for errors
    fontSize: "14px", // Slightly smaller text for error messages
  },
};

// Define the functional component for the Driver Registration Form
const DriverRegistrationForm = () => {
  // State to store form data (controlled inputs)
  const [formData, setFormData] = useState({
    name: "", // Driver's name
    licenseNumber: "", // Alphanumeric license number
    phoneNumber: "", // 10-digit phone number
    vehicleType: "Car", // Default vehicle type is "Car"
  });

  // State to store error messages for validation
  const [errors, setErrors] = useState({});

  // Handle input field changes and update formData state
  const handleChange = (e) => {
    const { name, value } = e.target; // Extract(gukuramo) name and value from the input
    setFormData({ ...formData, [name]: value }); // Update the specific field in formData
  };

  // Validate the form data and return an object containing errors (if any)
  const validateForm = () => {
    const newErrors = {}; // Initialize an empty object for errors

    // Check if name is empty
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    // Validate license number (only alphanumeric characters allowed)
    if (!formData.licenseNumber.match(/^[a-zA-Z0-9]+$/))
      newErrors.licenseNumber = "License Number must contain only alphanumeric characters.";
    // Validate phone number (must be a 10-digit number)
    if (!formData.phoneNumber.match(/^\d{10}$/))
      newErrors.phoneNumber = "Phone Number must be a valid 10-digit number.";

    return newErrors; // Return any validation errors
  };

  // Handle form submission
  const handleSubmit = () => {
    const validationErrors = validateForm(); // Validate the form
    if (Object.keys(validationErrors).length === 0) {
      // If no errors, display a success message and reset the form
      alert("Driver Registered Successfully!");
      setFormData({ name: "", licenseNumber: "", phoneNumber: "", vehicleType: "Car" });
    } else {
      // If there are errors, update the errors state
      setErrors(validationErrors);
    }
  };

  // Render the component's UI
  return (
    <div style={styles.container}>
      {/* Form Header */}
      <h2 style={styles.header}>Driver Registration Form</h2>
      <form style={styles.form}>
        {/* Name Field */}
        <div style={styles.field}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          {/* Display error message for the name field */}
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>

        {/* License Number Field */}
        <div style={styles.field}>
          <label>License Number:</label>
          <input
            type="text"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            style={styles.input}
          />
          {/* Display error message for the license number field */}
          {errors.licenseNumber && <p style={styles.error}>{errors.licenseNumber}</p>}
        </div>

        {/* Phone Number Field */}
        <div style={styles.field}>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={styles.input}
          />
          {/* Display error message for the phone number field */}
          {errors.phoneNumber && <p style={styles.error}>{errors.phoneNumber}</p>}
        </div>

        {/* Vehicle Type Dropdown */}
        <div style={styles.field}>
          <label>Vehicle Type:</label>
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="Car">Car</option>
            <option value="Truck">Truck</option>
            <option value="Motorcycle">Motorcycle</option>
          </select>
        </div>
      </form>

      {/* Submit Button */}
      <button type="button" style={styles.button} onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
};

// Export the component so it can be imported and used elsewhere
export default DriverRegistrationForm;
