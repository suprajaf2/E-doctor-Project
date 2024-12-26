// src/components/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState(''); // Options: 'Patient' or 'Doctor'
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Redirect based on userType
    if (role === 'Doctor') {
      navigate('/doctordashboard');
    };
    const newUser = { username, password, role };

    // Save newUser data to local storage
    localStorage.setItem('user', JSON.stringify(newUser));
    console.log("User registered and stored in localStorage:", newUser);

    alert('Registration successful!');

    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="register-container">
      <div className="register-header">
        <h1>Welcome to E-Doctor!</h1>
        <h2>Your health, our priority.</h2>
      </div>
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Register</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <label htmlFor="role">Role</label>
        <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Select Role</option>
          <option value="Patient">Patient</option>
          <option value="Doctor">Doctor</option>
        </select>
        <button type="submit">Register</button>
        <p>Already have an account? <a href="/login">Login here</a></p>
      </form>
    </div>
  );
}

export default Register;
