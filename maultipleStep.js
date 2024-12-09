// src/App.js

import React, { useState } from 'react';
import './App.css';

const MultiStepForm = () => {
  // Step state and form data state
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cardNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div className="container">
      <h1>Multi-Step Form</h1>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${(currentStep / 3) * 100}%` }}
        />
      </div>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className="form-step">
            <h2>Step 1: Name</h2>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        {currentStep === 2 && (
          <div className="form-step">
            <h2>Step 2: Address</h2>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        )}
        {currentStep === 3 && (
          <div className="form-step">
            <h2>Step 3: Payment Information</h2>
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="buttons">
          {currentStep > 1 && (
            <button type="button" onClick={handlePrev}>
              Previous
            </button>
          )}
          {currentStep < 3 ? (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
