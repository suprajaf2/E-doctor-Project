import React, { useState } from 'react';
import './AvailabilityDates.css';

function AvailabilityDates() {
  const [availabilityDates, setAvailabilityDates] = useState([]);
  const [showForm, setShowForm] = useState(false); // To toggle form visibility
  const [newAvailability, setNewAvailability] = useState({
    availabilityId: '',
    doctorId: '',
    fromDate: '',
    toDate: '',
  });

  // Handle input changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAvailability((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setAvailabilityDates((prev) => [...prev, newAvailability]); // Add new availability
    setNewAvailability({
      availabilityId: '',
      doctorId: '',
      fromDate: '',
      toDate: '',
    });
    setShowForm(false); // Close the form after submission
  };

  return (
    <div className="availability-container">
      <h2>Availability Dates</h2>

      {/* Add Button */}
      <div className="add-button-container">
        <button onClick={() => setShowForm(!showForm)} className="add-button">
          {showForm ? 'Cancel' : 'Add Availability'}
        </button>
      </div>

      {/* Availability Dates Table */}
      <div className="availability-table">
        <h3>List of Availability Dates</h3>
        <table>
          <thead>
            <tr>
              <th>Availability ID</th>
              <th>Doctor ID</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {availabilityDates.length > 0 ? (
              availabilityDates.map((availability, index) => (
                <tr key={index}>
                  <td>{availability.availabilityId}</td>
                  <td>{availability.doctorId}</td>
                  <td>{availability.fromDate}</td>
                  <td>{availability.toDate}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', color: '#888' }}>
                  No availability dates added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Form for Adding New Availability */}
      {showForm && (
        <div className="add-availability-form">
          <h3>Add Availability</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Availability ID:
              <input
                type="text"
                name="availabilityId"
                value={newAvailability.availabilityId}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Doctor ID:
              <input
                type="text"
                name="doctorId"
                value={newAvailability.doctorId}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              From Date:
              <input
                type="date"
                name="fromDate"
                value={newAvailability.fromDate}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              To Date:
              <input
                type="date"
                name="toDate"
                value={newAvailability.toDate}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Add Availability</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AvailabilityDates;
