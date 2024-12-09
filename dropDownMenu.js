
import React, { useState } from "react";







// Styles (for simplicity)
const styles = {
    container: {
      position: "relative",
      display: "inline-block",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
    },
    dropdown: {
      position: "absolute",
      top: "100%",
      left: 0,
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      listStyle: "none",
      margin: 0,
      padding: 0,
      zIndex: 1000,
    },
    item: {
      padding: "10px 20px",
      cursor: "pointer",
    },
  };

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div style={styles.container}>
      {/* Dropdown button */}
      <button onClick={toggleDropdown} style={styles.button}>
        {isOpen ? "Hide Options" : "Show Options"}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul style={styles.dropdown}>
          <li style={styles.item}>Option 1</li>
          <li style={styles.item}>Option 2</li>
          <li style={styles.item}>Option 3</li>
        </ul>
      )}
    </div>
  );
};



export default DropdownMenu;
