import React from 'react';





// Styling for the profile card
const styles = {
  card: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  info: {
    fontSize: '16px',
    margin: '5px 0',
  }
};




// ProfileCard component that receives name, age, and email as props
const ProfileCard = ({ name, age, email }) => {
  return (
    

    <div style={styles.card}>
      <h2 style={styles.name}>Name:{name}</h2>
      <p style={styles.info}><strong>Age:</strong> {age}</p>
      <p style={styles.info}><strong>Email:</strong> {email}</p>
    </div>

    
  );
};



export default ProfileCard;
