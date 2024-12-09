import React from 'react';

// Reusable Button component
const Button = ({ text, color }) => {
  // Inline style for button color customization
  const buttonStyle = {
    backgroundColor: color, // Set the background color based on the 'color' prop
    color: 'white',          // Text color will always be white for readability
    padding: '10px 20px',    // Add padding to the button
    fontSize: '16px',        // Set font size
    border: 'none',          // Remove the border
    borderRadius: '5px',     // Add rounded corners
    cursor: 'pointer',       // Change cursor to pointer on hover
  };

  return (
    <button style={buttonStyle}>
      {text} {/* Display the text passed as prop */}
    </button>
  );
};

export default Button;



