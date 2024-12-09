import React, { useState } from "react";






// Styling
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
      backgroundColor: "#007bff",
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

const StudentRegistrationForm = () => {
  // State to manage form inputs and errors
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};

    // Validate First Name
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required.";

    // Validate Last Name
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required.";

    // Validate Email
    if (!formData.email.match(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = "Invalid email format.";

    // Validate Student ID (alphanumeric)
    if (!formData.studentId.match(/^[a-zA-Z0-9]+$/))
      newErrors.studentId = "Student ID must contain only alphanumeric characters.";

    // Validate Date of Birth
    if (!formData.dob.trim()) newErrors.dob = "Date of Birth is required.";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      // Reset form (optional)
      setFormData({ firstName: "", lastName: "", email: "", studentId: "", dob: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Student Registration Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* First Name Field */}
        <div style={styles.field}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.firstName && <p style={styles.error}>{errors.firstName}</p>}
        </div>

        {/* Last Name Field */}
        <div style={styles.field}>
          <label for="name">Last Name:</label>
          <input id="name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.lastName && <p style={styles.error}>{errors.lastName}</p>}
        </div>

        {/* Email Field */}
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

        {/* Student ID Field */}
        <div style={styles.field}>
          <label>Student ID:</label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.studentId && <p style={styles.error}>{errors.studentId}</p>}
        </div>

        {/* Date of Birth Field */}
        <div style={styles.field}>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.dob && <p style={styles.error}>{errors.dob}</p>}
        </div>

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};


export default StudentRegistrationForm;
