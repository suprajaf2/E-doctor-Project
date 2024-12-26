import React from 'react';
import './DoctorList.css';
function DoctorList({ doctors, deleteDoctor }) {
  return (
    <div className="doctor-list-container">
      <h2>Doctor List</h2>
      <table>
        <thead>
          <tr>
            <th>Doctor ID</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Location</th>
            <th>Hospital</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.length === 0 ? (
            <tr>
              <td colSpan="9">No doctors available</td>
            </tr>
          ) : (
            doctors.map((doctor, index) => (
              <tr key={index}>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>{doctor.location}</td>
                <td>{doctor.hospital}</td>
                <td>{doctor.email}</td>
                <td>{doctor.phone}</td>
                <td>******</td> {/* Hiding the password */}
                <td>
                  <button onClick={() => deleteDoctor(index)}>Delete</button>
                  <button>Edit</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorList;
