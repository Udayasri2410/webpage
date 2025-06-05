import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styled/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (
      storedData &&
      storedData.email === credentials.email &&
      storedData.password === credentials.password
    ) {
      setError('');
      alert('Login successful!');
      navigate('/profile');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Signin to your <br/> account</h1>
        <p>Hi....<br/>Welcome back to your page</p>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter email address'
            value={credentials.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Enter password'
            value={credentials.password}
            onChange={handleChange}
            required
          />

          {error && <p className="error">{error}</p>}

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
