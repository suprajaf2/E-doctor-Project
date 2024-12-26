import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); // Email state to store the email entered for password reset
  const [showForgotPassword, setShowForgotPassword] = useState(false); // State to show/hide forgot password form
  const navigate = useNavigate();

  const adminCredentials = {
    username: 'admin', // Admin username
    password: 'admin123', // Admin password
  };
const DoctorCrentials = {
  username: 'doctor',
  password: 'doctor123',
};
const PatientCredentials = {
  username: 'patient',
  password: 'patient123',
};
  // Handle forgot password logic
  const handleForgotPassword = () => {
    if (email) {
      // Simulating sending a reset email
      alert(`Password reset link has been sent to ${email}`);
      setShowForgotPassword(false); // Close the forgot password form
    } else {
      alert('Please enter your email address.');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Check for admin login
  
    if (username === adminCredentials.username && password === adminCredentials.password) {
      alert('Admin login successful!');

      navigate('/dashboard');  // Redirect to the admin dashboard
      return; // Exit the function here to prevent further checks for other users
    }
    if(username===DoctorCrentials.username && password ===DoctorCrentials.password){
      alert('Doctor login successfull!');
      navigate('/Doctordashboard');
      return;
    }
    if(username===PatientCredentials.username && password ===PatientCredentials.password){
      alert('Patient login successfull!');
      navigate('/PatientDashboard');
      return;
    }
    // Retrieve the stored user data from localStorage for normal users
    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log("successfully login:",storedUser);
    // Validate the login credentials for normal users
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert('Login successful!');
      navigate('/dashboard');  // Redirect to the dashboard
    } else {
      alert('Invalid username or password!');
    }

};
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Welcome to E-Doctor!</h1>
        <h2>Your health, our priority.</h2>
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p>New user? <a href="/register">Register here</a></p>

        {/* Forgot Password button */}
        <button
          type="button"
          onClick={() => setShowForgotPassword(true)} // Trigger to show forgot password form
          className="forgot-password-button"
        >
          Forgot Password?
        </button>
      </form>

      {/* Forgot Password Form */}
      {showForgotPassword && (
        <div className="forgot-password-form">
          <h3>Enter your email to reset password</h3>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update the email state on change
            required
          />
          <button type="button" onClick={handleForgotPassword}>
            Send Reset Link
          </button>
          <button type="button" onClick={() => setShowForgotPassword(false)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
