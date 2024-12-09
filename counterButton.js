import React, { useState } from "react";


const styles = {
    container: {
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginTop: "10px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "5px",
      border: "2px solid #007BFF",
      backgroundColor: "#007BFF",
      color: "#FFF",
      transition: "background-color 0.3s",
    },
  };

function Counter() {
  const [count, setCount] = useState(0); // Initialize count state to 0

  const increment = () => {
    setCount((prevCount) => prevCount + 1); // Increment the count
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1); // Decrement the count
  };
  const reset=()=>{
   setCount((prevCount)=>prevCount=0)
  
  };

  return (
    <div style={styles.container} >
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div style={styles.buttonContainer}>
        <button onClick={increment} style={styles.button}>
          Increment
        </button>
        <button onClick={reset} style={styles.button}>reset </button>
        <button onClick={decrement} style={styles.button}>
          Decrement
        </button>
      </div>
    </div>
  );
};







export default Counter;
