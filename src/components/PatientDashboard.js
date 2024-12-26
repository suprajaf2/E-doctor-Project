import React, { useEffect, useState } from "react"; 
import "./PatientDashboard.css"; // Ensure you have this CSS file for the styles
import { color } from "chart.js/helpers";

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState(""); // To toggle between tabs
  const [profileData, setProfileData] = useState(null); // Store patient profile
  const [appointmentHistory, setAppointmentHistory] = useState([]); // Store appointment history
  const [profileFormData, setProfileFormData] = useState({
    PatientID: "",
    PatientName: "",
    MobileNo: "",
    Email: "",
    Password: "",
    BloodGroup: "",
    Gender: "",
    Age: "",
    Address: "",
  });

  const [appointmentFormData, setAppointmentFormData] = useState({
    AppointmentID: "",
    PatientID: "",
    DoctorID: "",
    Date: "",
    TimeSlot: "",
    Remark: "",
  });

  
  const handleLogout = () => {
    alert("Logged out successfully!");
    window.location.href = "/login"; // Redirect to login page
  };

  const [feedbackFormData, setFeedbackFormData] = useState({
    DoctorID: "",
    PatientID: "",
    OverallSatisfaction: "",
    Rating: 0, // Rating will be a number between 1 and 5
  });


  const handleProfileFormChange = (e) => {
    const { name, value } = e.target;
    setProfileFormData({ ...profileFormData, [name]: value });
  };

  const handleAppointmentFormChange = (e) => {
    const { name, value } = e.target;
    setAppointmentFormData({ ...appointmentFormData, [name]: value });
  };
  const handleFeedbackFormChange = (e) => {
    const { name, value } = e.target;
    setFeedbackFormData({ ...feedbackFormData, [name]: value });
  };
  
  const handleStarRating = (rating) => {
    setFeedbackFormData({ ...feedbackFormData, Rating: rating });
  };
  



  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setProfileData(profileFormData); // Save profile data
    setProfileFormData({
      PatientID: "",
      PatientName: "",
      MobileNo: "",
      Email: "",
      Password: "",
      BloodGroup: "",
      Gender: "",
      Age: "",
      Address: "",
    });
    setActiveTab("patientProfile"); // After saving, show the profile info
    alert("Profile created successfully!");
  };

  const handleEditProfile = () => {
    setProfileFormData(profileData); // Load existing profile data into the form
    setActiveTab("createProfile"); // Open the profile creation form to edit
  };

  const handleDeleteProfile = () => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      setProfileData(null);
      alert("Profile deleted successfully!");
    }
  };

  const handleBookAppointment = (e) => {
    e.preventDefault();
    setAppointmentHistory([...appointmentHistory, appointmentFormData]); // Add appointment to history
    setAppointmentFormData({
      AppointmentID: "",
      PatientID: "",
      DoctorID: "",
      Date: "",
      TimeSlot: "",
      Remark: "",
    });
    setActiveTab("appointmentHistory"); // Navigate to history after booking
    alert("Appointment booked successfully!");
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // You can log feedbackFormData to the console if needed for debugging
    console.log("Feedback submitted:", feedbackFormData);
    
    // Display a success message
    alert("Feedback submitted successfully!");
  
    // Reset the feedback form
    setFeedbackFormData({
      DoctorID: "",
      PatientID: "",
      OverallSatisfaction: "",
      Rating: 0,
    });
  
    // Optionally navigate to another tab or perform further actions
    setActiveTab(""); // Reset active tab or navigate as needed
  };
  

  
  return (
    <div className="patient-dashboard-container">
      {/* Sidebar */}
      <div className="patient-sidebar">
        <div className="sidebar-header">
          <h2  style={{ color: '#fff', fontWeight: 'bold', fontSize: '24px' }}> PATIENT DASHBOARD</h2>
        </div>
        <div className="sidebar-links">
          <button
            onClick={() => setActiveTab(profileData ? "patientProfile" : "createProfile")}
            className="sidebar-button"
          >
            <i className="fas fa-user"></i> {profileData ? "View Profile" : "Create Profile"}
          </button>
          <button
            onClick={() => setActiveTab("bookAppointment")}
            className="sidebar-button"
          >
            <i className="fas fa-calendar-plus"></i> Book Appointment
          </button>
          <button
            onClick={() => setActiveTab("appointmentHistory")}
            className="sidebar-button"
          >
            <i className="fas fa-history"></i> Appointment History
          </button>
          <button
            onClick={() => setActiveTab("View DoctorList")}
            className="sidebar-button"
          >
            <i className="fas fa-clipboard-list"></i> View Doctor List
          </button>
          <button
            onClick={() => setActiveTab("View Doctor AvailabilityList")}
            className="sidebar-button"
          >
            <i className="fas fa-file-alt"></i> View Doctor Availability
          </button>


          <button onClick={() => setActiveTab("View prescription")}>
          <i className="fas fa-prescription"></i> View Prescription
        </button>
        </div>
        
        <button
            onClick={() => setActiveTab("feedbackForm")}
            className="sidebar-button"
          >
            <i className="fas fa-comment-dots"></i> Feedback
          </button>



        <button className="logout-button" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="patient-main-content">
        {/* Header */}
        <header className="patient-dashboard-header">
          <h1>Your Personalized Health Hub!</h1>
        </header>

        <h3>The best doctors for your care</h3>

        {/* Footer */}
        <footer className="patient-footer">
          <p>&copy; 2024 E-Doctor Platform. All Rights Reserved.</p>
        </footer>

        {/* Content */}
        <div className="patient-content-container">
          {/* Create Profile Form */}
          {activeTab === "createProfile" && (
            <div className="card profile-form">
              <h2>{profileData ? "Edit Profile" : "Create Profile"}</h2>
              <form onSubmit={handleProfileSubmit}>
                <input
                  type="text"
                  name="PatientID"
                  placeholder="Patient ID"
                  value={profileFormData.PatientID}
                  onChange={handleProfileFormChange}
                  required
                />
                <input
                  type="text"
                  name="PatientName"
                  placeholder="Patient Name"
                  value={profileFormData.PatientName}
                  onChange={handleProfileFormChange}
                  required
                />
                <input
                  type="text"
                  name="MobileNo"
                  placeholder="Mobile No"
                  value={profileFormData.MobileNo}
                  onChange={handleProfileFormChange}
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  value={profileFormData.Email}
                  onChange={handleProfileFormChange}
                  required
                />
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  value={profileFormData.Password}
                  onChange={handleProfileFormChange}
                  required
                />
                <select
                  name="BloodGroup"
                  value={profileFormData.BloodGroup}
                  onChange={handleProfileFormChange}
                  required>
                  <option value="">Select BloodGroup</option>
                  <option value="Male">O +ve</option>
                  <option value="Female">O -ve</option>
                  <option value="Other">A +ve</option>
                  <option value="Other">A -ve</option>
                  <option value="Other">B +ve</option>
                  <option value="Other">B -ve</option>
                  <option value="Other">AB +ve</option>
                  <option value="Other">AB -ve</option>
                  </select>
                <select
                  name="Gender"
                  value={profileFormData.Gender}
                  onChange={handleProfileFormChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="number"
                  name="Age"
                  placeholder="Age"
                  value={profileFormData.Age}
                  onChange={handleProfileFormChange}
                  required
                />
                <input
                  type="text"
                  name="Address"
                  placeholder="Address"
                  value={profileFormData.Address}
                  onChange={handleProfileFormChange}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          )}

          {/* Patient Profile */}
          {activeTab === "patientProfile" && profileData && (
            <div className="card profile-info">
              <h2>Patient Profile</h2>
              <p><strong>Patient ID:</strong> {profileData.PatientID}</p>
              <p><strong>Name:</strong> {profileData.PatientName}</p>
              <p><strong>Mobile No:</strong> {profileData.MobileNo}</p>
              <p><strong>Email:</strong> {profileData.Email}</p>
              <p><strong>Blood Group:</strong> {profileData.BloodGroup}</p>
              <p><strong>Gender:</strong> {profileData.Gender}</p>
              <p><strong>Age:</strong> {profileData.Age}</p>
              <p><strong>Address:</strong> {profileData.Address}</p>
              <div className="profile-actions">
                <button onClick={handleEditProfile}>Edit Profile
                  
                </button>
                <button
                  onClick={handleDeleteProfile}
                  style={{ background: "#8e7cc3", color: "white" }}
                >
                  Delete Profile
                </button>
              </div>
            </div>
          )}

          {/* Book Appointment Form */}
          {activeTab === "bookAppointment" && (
            <div className="card appointment-form">
              <h2>Book Appointment</h2>
              <form onSubmit={handleBookAppointment}>
                <input
                  type="text"
                  name="AppointmentID"
                  placeholder="Appointment ID"
                  value={appointmentFormData.AppointmentID}
                  onChange={handleAppointmentFormChange}
                  required
                />
                <input
                  type="text"
                  name="PatientID"
                  placeholder="Patient ID"
                  value={appointmentFormData.PatientID}
                  onChange={handleAppointmentFormChange}
                  required
                />
                <input
                  type="text"
                  name="DoctorID"
                  placeholder="Doctor ID"
                  value={appointmentFormData.DoctorID}
                  onChange={handleAppointmentFormChange}
                  required
                />
                <input
                  type="date"
                  name="Date"
                  value={appointmentFormData.Date}
                  onChange={handleAppointmentFormChange}
                  required
                />
                <select
                  name="TimeSlot"
                  value={appointmentFormData.TimeSlot}
                  onChange={handleAppointmentFormChange}
                  required
                >
                  <option value="">Select Time Slot</option>
                  <option value="10:00 - 10:30">10:00 - 10:30</option>
                  <option value="10:30 - 11:00">10:30 - 11:00</option>
                  <option value="11:00 - 11:30">11:00 - 11:30</option>
                  <option value="11:30 - 12:00">11:30 - 12:00</option>
                  <option value="14:00 - 14:30">14:00 - 14:30</option>
                  <option value="14:30 - 15:00">14:30 - 15:00</option>
                </select>
                <textarea
                  name="Remark"
                  placeholder="Remark"
                  value={appointmentFormData.Remark}
                  onChange={handleAppointmentFormChange}
                ></textarea>
                <button type="submit">Book Appointment</button>
              </form>
            </div>
          )}

          {/* Appointment History */}
          {activeTab === "appointmentHistory" && appointmentHistory.length > 0 && (
            <div className="card appointment-history">
              <h2>Appointment History</h2>
              <ul>
                {appointmentHistory.map((appointment, index) => (
                  <li key={index}>
                    <strong>Appointment ID:</strong> {appointment.AppointmentID} <br />
                    <strong>Doctor ID:</strong> {appointment.DoctorID} <br />
                    <strong>Date:</strong> {appointment.Date} <br />
                    <strong>Time Slot:</strong> {appointment.TimeSlot} <br />
                    <strong>Remark:</strong> {appointment.Remark}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Feedback Form */}
{/* Feedback Form */}
{activeTab === "feedbackForm" && (
  <div className="card feedback-form">
    <h2>Submit Feedback</h2>
    <form onSubmit={handleFeedbackSubmit}>
      <input
        type="text"
        name="DoctorID"
        placeholder="Doctor ID"
        value={feedbackFormData.DoctorID}
        onChange={handleFeedbackFormChange}
        required
      />
      <input
        type="text"
        name="PatientID"
        placeholder="Patient ID"
        value={feedbackFormData.PatientID}
        onChange={handleFeedbackFormChange}
        required
      />
      <select
        name="OverallSatisfaction"
        value={feedbackFormData.OverallSatisfaction}
        onChange={handleFeedbackFormChange}
        required
      >
        <option value="">Select Overall Satisfaction</option>
        <option value="Neutral">Neutral</option>
        <option value="Satisfied">Satisfied</option>
        <option value="Unsatisfied">Unsatisfied</option>
        <option value="Very Satisfied">Very Satisfied</option>
      </select>
      <div className="star-rating">
        <p>Rate your experience:</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleStarRating(star)}
            style={{
              cursor: "pointer",
              color: feedbackFormData.Rating >= star ? "gold" : "gray",
              fontSize: "24px",
            }}
          >
            ★
          </span>
        ))}
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  </div>
)}



        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;