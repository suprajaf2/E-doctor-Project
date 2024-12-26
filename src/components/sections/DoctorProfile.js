import React, { useState } from 'react';

const DoctorProfile = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    doctorId: '',
    experience: '',
    specialty: '',
    location: '',
    hospitalName: '',
    email: '',
    mobileNumber: '',
    photo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass the form data to parent component (Doctordashboard)
  };

  return (
    <div className="create-profile-form">
      <h2>Create Doctor Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Doctor ID:
          <input type="text" name="doctorId" value={formData.doctorId} onChange={handleChange} required />
        </label>
        <label>
          Experience:
          <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
        </label>
        <label>
          Specialty:
          <input type="text" name="specialty" value={formData.specialty} onChange={handleChange} required />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </label>
        <label>
          Hospital Name:
          <input type="text" name="hospitalName" value={formData.hospitalName} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Mobile Number:
          <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
        </label>
        <label>
          Photo:
          <input type="file" name="photo" onChange={(e) => setFormData({ ...formData, photo: e.target.files[0] })} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DoctorProfile;
