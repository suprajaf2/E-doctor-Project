import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

function About() {
  const navigate = useNavigate(); // Hook to navigate

  const handleContactNavigation = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <div className="about-container">
      <div className="about-content">
        {/* About Section */}
        <section className="about-section">
          <h1 className="section-title">About Us</h1>
          <p className="section-description">
            Welcome to DoctorApp, your trusted partner in healthcare. We are committed to delivering
            high-quality medical services with a personalized approach. With a dedicated team of
            professionals and advanced technology, we ensure that your health is in the best hands.
          </p>
        </section>

        {/* Contact Navigation Section */}
        <div className="cta-section">
          <h2>Have questions or need assistance?</h2>
          <p>
            Feel free to reach out to us anytime. Our team is here to assist you with all your
            healthcare needs.
          </p>
          <button onClick={handleContactNavigation}>Contact Us</button>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <details>
            <summary>How do I book an appointment?</summary>
            <p>You can book an appointment online or by calling us at (123) 456-7890.</p>
          </details>
          <details>
            <summary>What insurance plans do you accept?</summary>
            <p>We accept most major insurance providers. Contact us for details.</p>
          </details>
        </div>

        {/* Vision Section */}
        <section className="vision-section">
          <h1 className="section-title">Our Vision</h1>
          <p className="section-description">
            Our vision is to revolutionize healthcare by integrating cutting-edge technology with
            compassionate care. We strive to create a seamless healthcare experience where your
            well-being is our priority.
          </p>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <h1 className="section-title">Our Services</h1>
          <ul className="services-list">
            <li className="service-item">
              <div className="service-icon">💻</div>
              <strong>24/7 Online Consultations</strong>
              <p>Access our experts anytime, anywhere.</p>
            </li>
            <li className="service-item">
              <div className="service-icon">🔬</div>
              <strong>Advanced Diagnostics</strong>
              <p>Benefit from state-of-the-art diagnostic services.</p>
            </li>
            <li className="service-item">
              <div className="service-icon">👩‍⚕️</div>
              <strong>Specialist Care</strong>
              <p>Consult with leading experts in various fields.</p>
            </li>
            <li className="service-item">
              <div className="service-icon">📊</div>
              <strong>Health Monitoring</strong>
              <p>Stay on top of your health with regular check-ups and tracking.</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
