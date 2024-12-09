// Importing React and the useState hook for state management
import React, { useState } from "react";

// CSS-in-JS: Defining styles for various elements in the component
const styles = {
    container: { // Style for the main container
      fontFamily: "Arial, sans-serif",
      maxWidth: "400px",
      margin: "20px auto",
    },
    form: { // Style for the form
      display: "flex",
      flexDirection: "column",
    },
    formGroup: { // Style for each form group (label + input)
      marginBottom: "15px",
    },
    input: { // Style for input fields
      width: "100%",
      padding: "8px",
      boxSizing: "border-box",
    },
    button: { // Style for the submit button
      padding: "10px 15px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      cursor: "pointer",
    },
    buttonHover: { // Style for the button on hover (not applied dynamically here)
      backgroundColor: "#45a049",
    },
    error: { // Style for error messages
      color: "red",
      fontSize: "0.9em",
      marginTop: "5px",
    },
};

// Functional component for the book registration form
function BookRegistrationForm() {
  // State to manage form data
  const [formData, setFormData] = useState({
    title: "",   // Book title
    author: "",  // Author name
    isbn: "",    // ISBN number
    year: "",    // Published year
  });

  // State to manage validation error messages
  const [error, setError] = useState("");

  // Handler to update state as user types into the input fields
  const handleChange = (e) => {
    const { name, value } = e.target; // Get the name and value of the input field
    setFormData({
      ...formData, // Spread the existing form data
      [name]: value, // Update the specific field that changed
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page by default

    // Validate the 'year' field to ensure it's a 4-digit number
    if (!/^\d{4}$/.test(formData.year)) {
      setError("Published Year must be a four-digit number."); // Set an error message
      return; // Stop further processing if validation fails
    }

    // If validation passes, clear the error and show a success message
    setError("");
    alert("Book registered successfully!");

    // Reset the form data to empty values
    setFormData({
      title: "",
      author: "",
      isbn: "",
      year: "",
    });
  };

  // JSX (HTML-like structure) returned by the component
  return (
    <div style={styles.container}> {/* Main container for the form */}
      <h1>Register a Book</h1> {/* Form heading */}
      <form onSubmit={handleSubmit} style={styles.form}> {/* Form with submit handler */}
        {/* Form group for book title */}
        <div style={styles.formGroup}>
          <label htmlFor="title">Book Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title} // Controlled input value
            onChange={handleChange} // Update state on change
            required
            style={styles.input}
          />
        </div>

        {/* Form group for author */}
        <div style={styles.formGroup}>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author} // Controlled input value
            onChange={handleChange} // Update state on change
            required
            style={styles.input}
          />
        </div>

        {/* Form group for ISBN */}
        <div style={styles.formGroup}>
          <label htmlFor="isbn">ISBN:</label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={formData.isbn} // Controlled input value
            onChange={handleChange} // Update state on change
            required
            style={styles.input}
          />
        </div>

        {/* Form group for published year */}
        <div style={styles.formGroup}>
          <label htmlFor="year">Published Year:</label>
          <input
            type="text"
            id="year"
            name="year"
            value={formData.year} // Controlled input value
            onChange={handleChange} // Update state on change
            required
            style={styles.input}
          />
          {/* Display validation error if exists */}
          {error && <div style={styles.error}>{error}</div>}
        </div>

        {/* Submit button */}
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

// Exporting the component to be used in other files
export default BookRegistrationForm;
