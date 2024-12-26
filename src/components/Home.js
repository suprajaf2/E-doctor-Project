import React, { useState } from 'react';
import './Home.css';

function Home() {
  
  
  return (
    <div className="home-container">
      <div className="home-overlay"></div> {/* Overlay for readability */}
      <div className="home-content" style={{ textAlign: 'left', marginLeft: '-550px' }}>
        <h1>Experienced quality medical services to rely on!</h1>
        <h2>Your health is our priority.</h2>
        <p>
          At DoctorApp, we bring you exceptional healthcare services tailored to meet your unique needs. 
          With an experienced team of professionals and state-of-the-art facilities, you can trust us to be with you 
          every step of your healthcare journey.
        </p>
      </div>

      
      {/* Features Section */}
      <div className="features-section" style={{ marginTop: '50px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Why Choose Us?</h3>
        <div className="features">
          <div className="feature-item">
            <h4>👨‍⚕️ Expert Doctors</h4>
            <p>Our team consists of highly skilled professionals dedicated to providing the best care possible.</p>
          </div>
          <div className="feature-item">
            <h4>🏥 Advanced Facilities</h4>
            <p>We use the latest technology and state-of-the-art equipment for accurate diagnosis and treatment.</p>
          </div>
          <div className="feature-item">
            <h4>📞 24/7 Support</h4>
            <p>Access our services anytime with our round-the-clock support team ready to assist you.</p>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="key-features-section" style={{ marginTop: '50px', textAlign: 'center', padding: '20px' }}>
        <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Key Features</h3>
        <div className="key-features">
          <div className="key-feature-item">
            <h4>📱 Teleconsultation</h4>
            <p>Connect with your doctor from the comfort of your home through video or voice calls.</p>
          </div>
          <div className="key-feature-item">
            <h4>📊 Health Monitoring</h4>
            <p>Track your health metrics and receive personalized recommendations for a healthier lifestyle.</p>
          </div>
          <div className="key-feature-item">
            <h4>🔒 Secure Digital Records</h4>
            <p>Access your medical history, prescriptions, and reports anytime on our secure platform.</p>
          </div>
        </div>
      </div>

      {/* Easy Steps Section */}
      <div className="easy-steps-section">
        <h3>4 Easy Steps to Get Your Solution</h3>
        <div className="easy-steps">
          <div className="step-item">
            <h4>🔍 Search Doctor</h4>
            <p>Find doctors based on specialty, location, or other preferences.</p>
          </div>
          <div className="step-item">
            <h4>📄 Check Profile</h4>
            <p>Learn about the doctor’s experience, expertise, and patient reviews.</p>
          </div>
          <div className="step-item">
            <h4>📅 Schedule Appointment</h4>
            <p>Book an appointment at a time that suits your schedule.</p>
          </div>
          <div className="step-item">
            <h4>💊 Get Your Solution</h4>
            <p>Receive professional medical advice and begin your journey to recovery.</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer1" style={{ marginTop: '50px' }}>
        <div className="footer1-container">
          <p>&copy; 2024 DoctorApp. All rights reserved.</p>
          <p>
            <a href="/terms" style={{ color: '#007BFF', textDecoration: 'none' }}>Terms of Service</a> |{' '}
            <a href="/privacy" style={{ color: '#007BFF', textDecoration: 'none' }}>Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
