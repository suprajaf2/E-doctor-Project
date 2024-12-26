// src/components/Login.js
import './Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    const correctUsername = 'admin';
    const correctPassword = 'password123';

    // Check credentials
    if (username === correctUsername && password === correctPassword) {
      navigate('/dashboard'); // Redirect on successful login
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };
if (userId && password && userType) {
      if (userType === "Doctor") {
        navigate("/doctordashboard"); // Navigate to Doctor Dashboard
      } else if (userType === "Patient") {
        navigate("/dashboard"); // Navigate to Patient Dashboard
      } else {
        alert("Invalid user type!");
      }
    } else {
      alert("Please enter all required fields!");
    }
  };
  
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

