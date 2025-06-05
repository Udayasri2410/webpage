import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styled/Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: '', // "yes" or "no"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    localStorage.setItem('userData', JSON.stringify(formData));

    alert('Account created successfully!');
    navigate('/profile'); // Redirect to profile
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Create your <br/> Account</h1>
        <form onSubmit={handleSubmit} className="signup-form">

          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />

          <div className="radio-group">
            <label className='ag-lable'>Are you a fresher</label>
            <div className="radio-options">
              <label>
                <input
                  type="radio"
                  name="isFresher"
                  value="yes"
                  checked={formData.isFresher === 'yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isFresher"
                  value="no"
                  checked={formData.isFresher === 'no'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <button type="submit" className="signup-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
