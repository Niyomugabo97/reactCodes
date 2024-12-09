import React, { useState } from "react";








// Inline styles (for simplicity)
const styles = {
    container: {
      width: "300px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    title: {
      marginBottom: "20px",
      fontSize: "24px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    inputGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontSize: "14px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "8px",
      fontSize: "14px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    console.log("Username:", username);
    console.log("Password:", password);
    alert(`Welcome, ${username}!`);
    // Add your authentication logic here
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        {/* Username field */}
        <div style={styles.inputGroup}>
          <label htmlFor="username" style={styles.label}>
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        {/* Password field */}
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>

    </div>
  );
};



export default LoginForm;
