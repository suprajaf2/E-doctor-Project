import React, { useState, useEffect } from 'react';
import './DoctorList.css';

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [showForm, setShowForm] = useState(false); // To toggle form visibility
  const [isEditing, setIsEditing] = useState(false); // To track edit mode
  const [editDoctorIndex, setEditDoctorIndex] = useState(null); // Index of the doctor being edited
  const [newDoctor, setNewDoctor] = useState({
    doctorId: '',
    doctorName: '',
    specialty: '',
    location: '',
    hospitalName: '',
    email: '',
    phoneNumber: '',
  });

  // Load doctors from local storage on component mount
  useEffect(() => {
    const storedDoctors = JSON.parse(localStorage.getItem('doctors')) || [];
    setDoctors(storedDoctors);
    console.log('Loaded doctors from localStorage:', storedDoctors);
  }, []);

  // Handle input changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission (Add or Edit)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Update the doctor at the specific index
      const updatedDoctors = [...doctors];
      updatedDoctors[editDoctorIndex] = newDoctor;

      // Save updated list to local storage
      localStorage.setItem('doctors', JSON.stringify(updatedDoctors));
      console.log('Updated doctor list saved to localStorage:', updatedDoctors);

      setDoctors(updatedDoctors);
      setIsEditing(false);
      setEditDoctorIndex(null);
    } else {
      // Add new doctor to the current list
      const updatedDoctors = [...doctors, newDoctor];

      // Save updated list to local storage
      localStorage.setItem('doctors', JSON.stringify(updatedDoctors));
      console.log('New doctor added and saved to localStorage:', updatedDoctors);

      setDoctors(updatedDoctors);
    }

    // Reset the form
    setNewDoctor({
      doctorId: '',
      doctorName: '',
      specialty: '',
      location: '',
      hospitalName: '',
      email: '',
      phoneNumber: '',
    });
    setShowForm(false); // Close the form after submission
  };

  // Handle Edit button click
  const handleEdit = (index) => {
    setNewDoctor(doctors[index]);
    setShowForm(true);
    setIsEditing(true);
    setEditDoctorIndex(index);
  };

  // Handle Delete button click
  const handleDelete = (index) => {
    const updatedDoctors = doctors.filter((_, i) => i !== index);

    // Save updated list to local storage
    localStorage.setItem('doctors', JSON.stringify(updatedDoctors));
    console.log('Doctor deleted. Updated list saved to localStorage:', updatedDoctors);

    setDoctors(updatedDoctors);
  };

  return (
    <div className="doctor-container">
      <h2>Doctor Management</h2>

      {/* Add Button */}
      <div className="add-button-container">
        <button onClick={() => {
          setShowForm(!showForm);
          setIsEditing(false); // Reset editing state if form is reopened
          setNewDoctor({
            doctorId: '',
            doctorName: '',
            specialty: '',
            location: '',
            hospitalName: '',
            email: '',
            phoneNumber: '',
          });
        }} className="add-button">
          {showForm ? 'Cancel' : isEditing ? 'Cancel Edit' : 'Add Doctor'}
        </button>
      </div>

      {/* Doctor List Table */}
      <div className="doctor-table">
        <h3>List of Doctors</h3>
        <table>
          <thead>
            <tr>
              <th>Doctor ID</th>
              <th>Doctor Name</th>
              <th>Specialty</th>
              <th>Location</th>
              <th>Hospital Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.length > 0 ? (
              doctors.map((doctor, index) => (
                <tr key={index}>
                  <td>{doctor.doctorId}</td>
                  <td>{doctor.doctorName}</td>
                  <td>{doctor.specialty}</td>
                  <td>{doctor.location}</td>
                  <td>{doctor.hospitalName}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.phoneNumber}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', color: '#888' }}>
                  No doctors added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Form for Adding/Editing Doctor */}
      {showForm && (
        <div className="add-doctor-form">
          <h3>{isEditing ? 'Edit Doctor' : 'Add Doctor'}</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Doctor ID:
              <input
                type="text"
                name="doctorId"
                value={newDoctor.doctorId}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Doctor Name:
              <input
                type="text"
                name="doctorName"
                value={newDoctor.doctorName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Specialty:
              <input
                type="text"
                name="specialty"
                value={newDoctor.specialty}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={newDoctor.location}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Hospital Name:
              <input
                type="text"
                name="hospitalName"
                value={newDoctor.hospitalName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={newDoctor.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="text"
                name="phoneNumber"
                value={newDoctor.phoneNumber}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">{isEditing ? 'Save Changes' : 'Add Doctor'}</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default DoctorList;
