import React, { useState } from "react";


const styles = {
    color: {
     width:"200px",
     padding:"20px",
     
    },
  };

function HoverColorChanger() {
  const [bgColor, setBgColor] = useState("#f0f0f0"); // Initial background color

  const handleMouseEnter = () => {
    setBgColor("#007BFF"); // Change color on hover
  };

  const handleMouseLeave = () => {
    setBgColor("#f0f0f0"); // Reset color when hover ends
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{...styles.color,  backgroundColor: bgColor }}
      
    >
      Hover color change
    </div>
  );
};



export default HoverColorChanger;
