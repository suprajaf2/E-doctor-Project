import React, { useState } from "react";
import "./Doctordashboard.css";

const Doctordashboard = () => {
  const [activeTab, setActiveTab] = useState(""); // To toggle between tabs
  const [profileData, setProfileData] = useState(null); // Store doctor profile
  const [availabilityList, setAvailabilityList] = useState([]); // Store doctor's availability
  const [prescriptions, setPrescriptions] = useState([]); // Store prescriptions

  const [profileFormData, setProfileFormData] = useState({
    name: "",
    DoctorID: "",
    specialization: "",
    experience: "",
    Location: "",
    Hospitalname: "",
    Email: "",
    MobileNo: "",
    profilePhoto: null,
  });

  const [availabilityFormData, setAvailabilityFormData] = useState({
    doctorID: "",
    availabilityID: "",
    startDate: "",
    endDate: "",
    Time: "",
    index: null, // Track the index of the item to edit
  });

  const [prescriptionFormData, setPrescriptionFormData] = useState({
    doctorName: "",
    doctorContact: "",
    patientID: "",
    prescriptionDate: "",
    doctorSignature: "",
    medications: [
      { medicineName: "", dosage: "", directions: "", quantity: "" }
    ]
  });

  const handleLogout = () => {
    alert("Logged out successfully!");
    window.location.href = "/login"; // Redirect to login page
  };

  // Handle profile form changes
  const handleProfileFormChange = (e) => {
    const { name, value } = e.target;
    setProfileFormData({ ...profileFormData, [name]: value });
  };

  // Handle availability form changes
  const handleAvailabilityFormChange = (e) => {
    const { name, value } = e.target;
    setAvailabilityFormData({ ...availabilityFormData, [name]: value });
  };

  // Handle prescription form main fields changes
  const handlePrescriptionFormChange = (e) => {
    const { name, value } = e.target;
    setPrescriptionFormData({ ...prescriptionFormData, [name]: value });
  };

  // Handle changes in medications
  const handleMedicationChange = (e, index) => {
    const { name, value } = e.target;
    const updatedMedications = [...prescriptionFormData.medications];
    updatedMedications[index][name] = value;
    setPrescriptionFormData({ ...prescriptionFormData, medications: updatedMedications });
  };

  // Add a new medication row
  const addMedication = () => {
    setPrescriptionFormData({
      ...prescriptionFormData,
      medications: [...prescriptionFormData.medications, { medicineName: "", dosage: "", directions: "", quantity: "" }]
    });
  };

  // Remove a medication row
  const removeMedication = (index) => {
    const updatedMedications = prescriptionFormData.medications.filter((_, i) => i !== index);
    setPrescriptionFormData({ ...prescriptionFormData, medications: updatedMedications });
  };

  // Handle profile form submission
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setProfileData(profileFormData); // Save profile data
    setProfileFormData({
      name: "",
      DoctorID: "",
      specialization: "",
      experience: "",
      Location: "",
      Hospitalname: "",
      Email: "",
      MobileNo: "",
      profilePhoto: null,
    });
    setActiveTab("doctorProfile"); // Show profile after saving
    // Optionally, store in localStorage
    // localStorage.setItem('profileFormData', JSON.stringify(profileFormData));
    console.log("Successfully stored doctor details:", profileFormData);
    alert("Profile created successfully!");
  };

  // Handle availability form submission
  const handleAddAvailabilitySubmit = (e) => {
    e.preventDefault();
    if (availabilityFormData.index !== null) {
      // Edit existing availability
      const updatedList = [...availabilityList];
      updatedList[availabilityFormData.index] = availabilityFormData;
      setAvailabilityList(updatedList);
      alert("Availability updated successfully!");
    } else {
      // Add new availability
      setAvailabilityList([...availabilityList, availabilityFormData]);
      alert("Availability added successfully!");
    }
    setAvailabilityFormData({
      doctorID: "",
      availabilityID: "",
      startDate: "",
      endDate: "",
      Time: "",
      index: null,
    });
    setActiveTab(""); // Reset view
    // Optionally, store in localStorage
    // localStorage.setItem('updatedList', JSON.stringify(updatedList));
  };

  // Handle prescription form submission
  const handleAddPrescriptionSubmit = (e) => {
    e.preventDefault();
    setPrescriptions([...prescriptions, prescriptionFormData]);
    setPrescriptionFormData({
      doctorName: "",
      doctorContact: "",
      patientID: "",
      prescriptionDate: "",
      doctorSignature: "",
      medications: [
        { medicineName: "", dosage: "", directions: "", quantity: "" }
      ]
    });
    alert("Prescription sent successfully!");
  };

  // Handle profile edit
  const handleEditProfile = () => {
    setProfileFormData(profileData); // Load existing profile data into the form
    setActiveTab("createProfile"); // Open the profile creation form to edit
  };

  // Handle profile deletion
  const handleDeleteProfile = () => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      setProfileData(null);
      alert("Profile deleted successfully!");
    }
  };

  // Handle availability edit
  const handleEditAvailability = (index) => {
    setAvailabilityFormData({ ...availabilityList[index], index });
    setActiveTab("addAvailability");
  };

  // Handle availability deletion
  const handleDeleteAvailability = (index) => {
    if (window.confirm("Are you sure you want to delete this availability?")) {
      const updatedList = availabilityList.filter((_, i) => i !== index);
      setAvailabilityList(updatedList);
      alert("Availability deleted successfully!");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2 style={{ color: "#fff", fontWeight: "bold", fontSize: "20px" }}>DOCTOR DASHBOARD</h2>
        </div>
        <button onClick={() => setActiveTab("Dashboard")}>
          <i className="fas fa-tachometer-alt"></i> Dashboard
        </button>

        {profileData ? (
          <button onClick={() => setActiveTab("doctorProfile")}>
            <i className="fas fa-user-md"></i> Doctor Profile
          </button>
        ) : (
          <button onClick={() => setActiveTab("createProfile")}>
            <i className="fas fa-user-plus"></i> Create Profile
          </button>
        )}

        {availabilityList.length > 0 ? (
          <button onClick={() => setActiveTab("viewAvailability")}>
            <i className="fas fa-calendar-check"></i> View Availability
          </button>
        ) : (
          <button onClick={() => setActiveTab("addAvailability")}>
            <i className="fas fa-calendar-plus"></i> Add Availability
          </button>
        )}

        <button onClick={() => setActiveTab("prescription")}>
          <i className="fas fa-prescription"></i> Prescriptions
        </button>

        <button onClick={() => setActiveTab("View Feedback")}>
          <i className="fas fa-comment-dots"></i> View Feedback
        </button>

        <button className="logout-button" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <h1 className="dashboard-heading">Welcome Doctor!</h1>
        </header>
        <footer className="footer">
          <p>&copy; 2024 E-Doctor Platform. All Rights Reserved.</p>
        </footer>

        {/* Dashboard Information */}
        {activeTab === "Dashboard" && (
          <div className="dashboard-content" style={{ display: "flex", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
            <div className="dashboard-box" style={{ backgroundColor: "#4CAF50", padding: "20px", borderRadius: "8px", flexBasis: "30%", textAlign: "center" }}>
              <i className="fas fa-calendar-alt" style={{ fontSize: "40px", marginBottom: "10px" }}></i>
              <h3>Today's Appointments</h3>
              <p>0</p>
            </div>

            <div className="dashboard-box" style={{ backgroundColor: "#f44336", padding: "20px", borderRadius: "8px", flexBasis: "30%", textAlign: "center" }}>
              <i className="fas fa-times-circle" style={{ fontSize: "40px", marginBottom: "10px" }}></i>
              <h3>Cancelled Appointments</h3>
              <p>0</p>
            </div>

            <div className="dashboard-box" style={{ backgroundColor: "#2196F3", padding: "20px", borderRadius: "8px", flexBasis: "30%", textAlign: "center" }}>
              <i className="fas fa-check-circle" style={{ fontSize: "40px", marginBottom: "10px" }}></i>
              <h3>Completed Appointments</h3>
              <p>0</p>
            </div>
            <div className="dashboard-box" style={{ backgroundColor: "#2196F3", padding: "20px", borderRadius: "8px", flexBasis: "30%", textAlign: "center" }}>
              <i className="fas fa-check-circle" style={{ fontSize: "40px", marginBottom: "10px" }}></i>
              <h3>Total Appointments</h3>
              <p>0</p>
            </div>
          </div>
        )}

        {/* Create Profile Form */}
        {activeTab === "createProfile" && (
          <div className="centered-form">
            <form onSubmit={handleProfileSubmit}>
              <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                {profileData ? "Edit Doctor Profile" : "Create Doctor Profile"}
              </h2>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={profileFormData.name}
                onChange={handleProfileFormChange}
                required
              />
              <input
                type="text"
                name="DoctorID"
                placeholder="DoctorID"
                value={profileFormData.DoctorID}
                onChange={handleProfileFormChange}
                required
              />
              <input
                type="text"
                name="specialization"
                placeholder="Specialization"
                value={profileFormData.specialization}
                onChange={handleProfileFormChange}
                required
              />
              <input
                type="text"
                name="experience"
                placeholder="Experience (in years)"
                value={profileFormData.experience}
                onChange={handleProfileFormChange}
                required
              />
              <input
                type="text"
                name="Location"
                placeholder="Location"
                value={profileFormData.Location}
                onChange={handleProfileFormChange}
                required
              />
              <input
                type="text"
                name="Hospitalname"
                placeholder="Hospitalname"
                value={profileFormData.Hospitalname}
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
                type="text"
                name="MobileNo"
                placeholder="Mobile No"
                value={profileFormData.MobileNo}
                onChange={handleProfileFormChange}
                required
              />
              <input
                type="file"
                name="profilePhoto"
                onChange={(e) =>
                  setProfileFormData({ ...profileFormData, profilePhoto: e.target.files[0] })
                }
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}

        {/* Doctor Profile Info */}
        {activeTab === "doctorProfile" && profileData && (
          <div className="centered-form">
            <h2>Doctor Profile</h2>
            <p><strong>Name:</strong> {profileData.name}</p>
            <p><strong>DoctorID:</strong> {profileData.DoctorID}</p>
            <p><strong>Specialization:</strong> {profileData.specialization}</p>
            <p><strong>Experience:</strong> {profileData.experience} years</p>
            <p><strong>Location:</strong> {profileData.Location}</p>
            <p><strong>Hospital Name:</strong> {profileData.Hospitalname}</p>
            <p><strong>Email:</strong> {profileData.Email}</p>
            <p><strong>Mobile No:</strong> {profileData.MobileNo}</p>
            {profileData.profilePhoto && (
              <img
                src={URL.createObjectURL(profileData.profilePhoto)}
                alt="Profile"
                style={{ width: "150px", borderRadius: "50%" }}
              />
            )}
            <div className="profile-actions">
              <button onClick={handleEditProfile}>Edit Profile</button>
              <button onClick={handleDeleteProfile} style={{ background: "#6c5b7b", color: "white" }}>
                Delete Profile
              </button>
            </div>
          </div>
        )}

        {/* Add/Edit Availability Form */}
        {activeTab === "addAvailability" && (
          <div className="centered-form">
            <form onSubmit={handleAddAvailabilitySubmit}>
              <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                {availabilityFormData.index !== null ? "Edit Availability" : "Add Availability"}
              </h2>
              <input
                type="text"
                name="doctorID"
                placeholder="Doctor ID"
                value={availabilityFormData.doctorID}
                onChange={handleAvailabilityFormChange}
                required
              />
              <input
                type="text"
                name="availabilityID"
                placeholder="Availability ID"
                value={availabilityFormData.availabilityID}
                onChange={handleAvailabilityFormChange}
                required
              />
              <input
                type="date"
                name="startDate"
                value={availabilityFormData.startDate}
                onChange={handleAvailabilityFormChange}
                required
              />
              <input
                type="date"
                name="endDate"
                value={availabilityFormData.endDate}
                onChange={handleAvailabilityFormChange}
                required
              />
              <input
                type="text"
                name="Time"
                placeholder="Time"
                value={availabilityFormData.Time}
                onChange={handleAvailabilityFormChange}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}

        {/* View Availability List */}
        {activeTab === "viewAvailability" && availabilityList.length > 0 && (
          <div className="availability-list">
            <h2>Doctor Availability</h2>
            {availabilityList.map((availability, index) => (
              <div key={index} className="availability-item">
                <p><strong>Doctor ID:</strong> {availability.doctorID}</p>
                <p><strong>Availability ID:</strong> {availability.availabilityID}</p>
                <p><strong>Start Date:</strong> {availability.startDate}</p>
                <p><strong>End Date:</strong> {availability.endDate}</p>
                <p><strong>Time:</strong> {availability.Time}</p>
                <div className="availability-actions">
                  <button onClick={() => handleEditAvailability(index)}>Edit</button>
                  <button onClick={() => handleDeleteAvailability(index)} style={{ background: "red", color: "white" }}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Prescription Form */}
        {activeTab === "prescription" && (
          <div className="centered-form">
            <form onSubmit={handleAddPrescriptionSubmit} className="prescription-form">
              <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                Add Prescription
              </h2>

              {/* Doctor's Information */}
              <input
                type="text"
                name="doctorName"
                placeholder="Doctor's Name & Qualifications"
                value={prescriptionFormData.doctorName}
                onChange={handlePrescriptionFormChange}
                required
              />
              <input
                type="text"
                name="doctorContact"
                placeholder="Doctor's Contact Info (Phone/Address)"
                value={prescriptionFormData.doctorContact}
                onChange={handlePrescriptionFormChange}
                required
              />

              {/* Patient's Information */}
              <input
                type="text"
                name="patientID"
                placeholder="Patient ID"
                value={prescriptionFormData.patientID}
                onChange={handlePrescriptionFormChange}
                required
              />
              <input
                type="date"
                name="prescriptionDate"
                placeholder="Prescription Date"
                value={prescriptionFormData.prescriptionDate}
                onChange={handlePrescriptionFormChange}
                required
              />

              {/* Medication Details in Table */}
              <h3>Medication Details</h3>
              <table>
                <thead>
                  <tr>
                    <th>Medicine Name</th>
                    <th>Dosage</th>
                    <th>Directions</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {prescriptionFormData.medications.map((medication, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          name="medicineName"
                          placeholder="Medicine Name (Brand/Generic)"
                          value={medication.medicineName}
                          onChange={(e) => handleMedicationChange(e, index)}
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="dosage"
                          placeholder="Dosage (e.g., 500mg)"
                          value={medication.dosage}
                          onChange={(e) => handleMedicationChange(e, index)}
                          required
                        />
                      </td>
                      <td>
                        <textarea
                          name="directions"
                          placeholder="Directions for Use (e.g., take one tablet twice daily)"
                          value={medication.directions}
                          onChange={(e) => handleMedicationChange(e, index)}
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="quantity"
                          placeholder="Quantity (e.g., 30 tablets)"
                          value={medication.quantity}
                          onChange={(e) => handleMedicationChange(e, index)}
                          required
                        />
                      </td>
                      <td>
                        <button type="button" onClick={() => removeMedication(index)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Add Medication Button */}
              <button type="button" onClick={addMedication}>Add Medication</button>

              {/* Doctor's Signature */}
              <input
                type="text"
                name="doctorSignature"
                placeholder="Doctor's Signature"
                value={prescriptionFormData.doctorSignature}
                onChange={handlePrescriptionFormChange}
                required
              />

              <button type="submit">Send Prescription</button>
            </form>
          </div>
        )}

        {/* View Prescriptions */}
        {activeTab === "viewPrescriptions" && prescriptions.length > 0 && (
          <div className="prescription-list">
            <h2>Prescriptions</h2>
            {prescriptions.map((prescription, index) => (
              <div key={index} className="prescription-item">
                <p><strong>Doctor Name:</strong> {prescription.doctorName}</p>
                <p><strong>Doctor Contact:</strong> {prescription.doctorContact}</p>
                <p><strong>Patient ID:</strong> {prescription.patientID}</p>
                <p><strong>Prescription Date:</strong> {prescription.prescriptionDate}</p>
                <p><strong>Doctor's Signature:</strong> {prescription.doctorSignature}</p>

                {/* Medication Table */}
                <h3>Medications</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Medicine Name</th>
                      <th>Dosage</th>
                      <th>Directions</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prescription.medications.map((med, idx) => (
                      <tr key={idx}>
                        <td>{med.medicineName}</td>
                        <td>{med.dosage}</td>
                        <td>{med.directions}</td>
                        <td>{med.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctordashboard;
