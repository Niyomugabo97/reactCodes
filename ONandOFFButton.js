import React, { useState } from "react";


const styles = {
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#007BFF",
      color: "#FFF",
      transition: "background-color 0.3s ease",
    },
  };
  
function ToggleButton() {
  const [isOn, setIsOn] = useState(false); // Initialize state as OFF

  const handleToggle = () => {
    setIsOn((prevState) => !prevState); // Toggle the state
  };

  return (
    <button onClick={handleToggle} style={styles.button}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
};


export default ToggleButton;
