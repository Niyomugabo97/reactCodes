import React from 'react';
import Hobby from './hobby';

// Parent component that contains a list of hobbies
const HobbyList = () => {
  const hobbies = ['Reading', 'Traveling', 'Cooking', 'Gardening', 'Photography'];

  return (
    <div>
       <h1> Q2 HobbyList</h1>
      <h2>My Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          // Pass each hobby to the child component
          <Hobby key={index} hobby={hobby} />
        ))}
      </ul>
    </div>
  );
};

export default HobbyList;
