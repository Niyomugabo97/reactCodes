// Import React and useState hook from the React library
import React, { useState } from "react";





// Styling object for the form and its components
const styles = {
    container: {
      width: "400px",
      margin: "20px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    field: {
      marginBottom: "15px",
    },
    input: {
      width: "100%",
      padding: "8px",
      margin: "5px 0",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    error: {
      color: "red",
      fontSize: "14px",
    },
  };
  
// Define the functional component for the Lecturer Registration Form
const LecturerRegistrationForm = () => {
  // State to manage form data (inputs) with default empty values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
  });

  // State to manage validation errors for form inputs
  const [errors, setErrors] = useState({});

  // Function to handle changes in input fields
  const handleChange = (e) => {
    // Destructure the name and value from the event target
    const { name, value } = e.target;
    // Update the formData state with the new value for the corresponding field
    setFormData({ ...formData, [name]: value });
  };

  // Function to validate form inputs
 // Validate form inputs
const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    
    // Corrected email validation regex
    if (!formData.email.match(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = "Invalid email format.";
    
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.phone.match(/^\d+$/))
      newErrors.phone = "Phone number must be numeric.";
  
    return newErrors;
  };
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const validationErrors = validateForm(); // Validate the form inputs
    if (Object.keys(validationErrors).length === 0) {
      // If no validation errors, show success message
      alert("Form submitted successfully!");
      // Optionally reset the form fields to empty
      setFormData({ name: "", email: "", subject: "", phone: "" });
    } else {
      // If there are validation errors, update the errors state
      setErrors(validationErrors);
    }
  };

  // JSX for rendering the form and input fields
  return (

        <div style={styles.container}>
      <h2 style={styles.header}>Lecturer Registration Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Name input field */}
        <div style={styles.field}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>

        {/* Email input field */}
        <div style={styles.field}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>

        {/* Subject input field */}
        <div style={styles.field}>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.subject && <p style={styles.error}>{errors.subject}</p>}
        </div>

        {/* Phone number input field */}
        <div style={styles.field}>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.phone && <p style={styles.error}>{errors.phone}</p>}
        </div>

        {/* Submit button */}
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};



// Export the component so it can be imported and used in other files
export default LecturerRegistrationForm;
