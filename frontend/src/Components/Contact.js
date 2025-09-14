import React from "react";
import "../Style/ContactPage.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function ContactPage() {
  return (
    <div className="contact-section">
      <div className="animated-title">CONTACT US</div>

      <div className="contact-container">
        {/* Left Side - Details + Map */}
        <div className="contact-left">
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <p>piyush.office00@gmail.com</p>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <p>+91 6392480060</p>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <p>Noida, Uttar Pradesh, India</p>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.878297868604!2d80.94299161504428!3d26.846693083158267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2a55a4a7db9%3A0xdeb14b2f8e6141f6!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1678893671891!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-right">
          <form className="contact-form">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email Address</label>
            <input type="email" placeholder="Enter email" />

            <label>Message</label>
            <textarea placeholder="Enter your message"></textarea>

            <button type="submit" className="submit-btn">
              Send Message ✉️
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
