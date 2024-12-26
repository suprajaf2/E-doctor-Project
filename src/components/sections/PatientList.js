import React, { useEffect, useState } from 'react';
import './PatientList.css';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching data from an API or a mock endpoint
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        // Replace with your API endpoint
        const response = await fetch('/api/patients');
        const data = await response.json();
        setPatients(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching patient data:', error);
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="patient-list-container">
      <h2>Patient List</h2>

      {loading ? (
        <p>Loading patient data...</p>
      ) : (
        <table className="patient-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.contact}</td>
                <td>{patient.email}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PatientList;
