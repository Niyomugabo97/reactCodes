import React, { useState } from 'react';




function Form() {
  // State to store the user's input for both fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Name:', name);
    console.log('Email:', email);

  };

  // Handle input changes
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div style={{border:"100px",width:"400px",textAlign:"center"}}>
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </label>
      </div>
      <button type="submit">Submit</button>
      
    </form>
    </div>
    
  );
}

export default Form;
