  import React, { useState } from "react";


const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "400px",
      margin: "20px auto",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    formGroup: {
      marginBottom: "15px",
    },
    input: {
      width: "100%",
      padding: "8px",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      padding: "8px",
      height: "80px",
      boxSizing: "border-box",
    },
    button: {
      padding: "10px 15px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      cursor: "pointer",
    },
    error: {
      color: "red",
      fontSize: "0.9em",
      marginTop: "5px",
    },
  };
  

function ModuleRegistrationForm() {
  const [formData, setFormData] = useState({
    moduleName: "",
    moduleCode: "",
    description: "",
    credits: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error if user starts correcting the Credits field
    if (name === "credits") {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Credits field
    if (!formData.credits || isNaN(formData.credits)) {
      setError("Credits must be a numeric value and cannot be empty.");
      return;
    }

    // If validation passes
    setError("");
    alert("Module registered successfully!");
    setFormData({
      moduleName: "",
      moduleCode: "",
      description: "",
      credits: "",
    });
  };

  return (
    <div style={styles.container}>
      <h1>Register a Module</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="moduleName">Module Name:</label>
          <input
            type="text"
            id="moduleName"
            name="moduleName"
            value={formData.moduleName}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="moduleCode">Module Code:</label>
          <input
            type="text"
            id="moduleCode"
            name="moduleCode"
            value={formData.moduleCode}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="credits">Credits:</label>
          <input
            type="text"
            id="credits"
            name="credits"
            value={formData.credits}
            onChange={handleChange}
            required
            style={styles.input}
          />
          {error && <div style={styles.error}>{error}</div>}
        </div>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};


export default ModuleRegistrationForm;
