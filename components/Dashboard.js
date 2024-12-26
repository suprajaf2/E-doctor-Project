import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard</h2>
      <p>You are now logged in as <strong>admin</strong></p>
      <ul>
        <li><Link to="/userlist">User List</Link></li>
        <li><Link to="/doctorlist">Doctor List</Link></li>
        <li><Link to="/patientlist">Patient List</Link></li>
        <li><Link to="/adminlist">Admin List</Link></li>
        <li><Link to="/appointmentlist">Appointment List</Link></li>
        <li><Link to="/availabilitydates">Availability Dates</Link></li>
        <li><Link to="/feedbacklist">Feedback List</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
}

export default Dashboard;
