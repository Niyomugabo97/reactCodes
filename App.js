import React, { useState, useCallback } from "react";
import List from "./List"; // Import the List component

const App = () => {
  const [input, setInput] = useState(""); // To manage the input field state
  const [todos, setTodos] = useState([]); // To manage the list of todos

  // Function to handle input changes
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Function to add a new todo
  const addTodo = () => {
    if (input.trim()) {
      setTodos((prevTodos) => [...prevTodos, input]);
      setInput(""); // Clear the input field
    }
  };

  // Memoize the addTodo function to prevent unnecessary re-renders in List component
  const memoizedAddTodo = useCallback(addTodo, [input]); 

  return (
    <div>
      <h1>Todo List App</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter todo"
      />
      <button onClick={memoizedAddTodo}>Add Todo</button>

      {/* Pass the todos list to the List component */}
      <List todos={todos} />
    </div>
  );
};

export default App;

