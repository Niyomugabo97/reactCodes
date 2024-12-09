import React from "react";

// React.memo will prevent re-renders unless the todos prop changes
const List = React.memo(({ todos }) => {
  console.log("List component rendered"); // This will help you verify if List re-renders unnecessarily

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default List;
