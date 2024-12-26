import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import AvailabilityForm from "./AvailabilityForm";
import AppointmentList from "./AppointmentList";
import "./Doctordashboard.css";

const Doctordashboard = () => {
  const [profile, setProfile] = useState(null);
  const [availability, setAvailability] = useState([]);
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: "John Doe", date: "2024-11-25", time: "10:00 AM" },
    { id: 2, patientName: "Jane Smith", date: "2024-11-26", time: "2:00 PM" },
  ]);

  const handleProfileUpdate = (newProfile) => setProfile(newProfile);

  const handleAvailabilityUpdate = (newAvailability) =>
    setAvailability([...availability, newAvailability]);

  return (
    <div className="doctor-dashboard">
      <h1>Doctor Dashboard</h1>
      <div className="dashboard-sections">
        <div className="profile-section">
          <ProfileForm profile={profile} onUpdateProfile={handleProfileUpdate} />
        </div>
        <div className="availability-section">
          <AvailabilityForm onUpdateAvailability={handleAvailabilityUpdate} />
          <ul>
            {availability.map((slot, index) => (
              <li key={index}>
                {slot.date} - {slot.time}
              </li>
            ))}
          </ul>
        </div>
        <div className="appointments-section">
          <AppointmentList appointments={appointments} />
        </div>
      </div>
    </div>
  );
};

export default Doctordashboard;
