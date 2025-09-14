// Home.js
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaUser, FaCode, FaRoute, FaTrophy, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import profilePic from "../Assets/mypic.png";
import AboutPage from "../Pages/AboutPage";
import SkillsPage from "../Pages/SkillsPage";
import JourneyPage from "../Pages/JourneyPage";
import RankingPage from "../Pages/RankingPage";
import SocialMediaPage from "../Pages/SocialMediaPage";
import { projectData } from "../Components/Project";

import "../Style/Home.css";

// Certificates Data
import HackerRank from "../Assets/HackerRank.png";

const certificateData = [
  {
    id: 1,
    title: "Problem Solving Basic : Java Basic Programming",
    platform: "HackerRank",
    link: "https://www.hackerrank.com/certificates/fa7070b81a35",
    img: HackerRank,
  },
  {
    id: 2,
    title: "SQL Basic : Programming Fundamentals",
    platform: "HackerRank",
    link: "https://www.hackerrank.com/certificates/0d53db3a332e",
    img: HackerRank,
  },
  {
    id: 3,
    title: "SQL Intermediate : Programming Fundamentals",
    platform: "HackerRank",
    link: "https://www.hackerrank.com/certificates/ed90984a5099",
    img: HackerRank,
  },
];

function Home() {
  const [activeTab, setActiveTab] = useState("about");

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutPage />;
      case "skill":
        return <SkillsPage />;
      case "journey":
        return <JourneyPage />;
      case "ranking":
        return <RankingPage />;
      case "socialmedia":
        return <SocialMediaPage />;
      default:
        return <AboutPage />;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="home-section" id="home">
        <div className="home-container">
          {/* Left Text */}
          <div className="home-text">
            <h1 className="fw-bold greeting-text">
              Hi There! <span role="img" aria-label="wave">👋</span>
            </h1>
            <h1 className="fw-bold">
              I'M <span className="highlight-name">PIYUSH PANDEY</span>
            </h1>

            <h2 className="typewriter-text">
              <Typewriter
                words={[
                  "Developer",
                  "Full Stack Developer",
                  "MERN Stack Developer",
                  "Tech Enthusiast",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            {/* Social Icons */}
            <div className="social-icons">
              <a
                href="https://github.com/Piyushpandey09"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-button"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/piyush-pandey-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-button"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/princepandey09/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-button"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://x.com/princepandey09"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-button"
              >
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="image-container">
            <img src={profilePic} alt="Piyush Pandey" className="profile-image" />
          </div>
        </div>
      </section>

      {/* About Section with Tabs */}
      <section className="aboutme-fullpage" id="about">
        <div className="aboutme-container">
          <div className="aboutme-header">
            <motion.h1
              className="aboutme-heading"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Get to Know Me
            </motion.h1>
          </div>

          {/* Navigation Tabs */}
          <nav className="aboutme-tabs">
            <button
              className={`tab-link ${activeTab === "about" ? "active" : ""}`}
              onClick={() => setActiveTab("about")}
            >
              <FaUser className="tab-icon" /> About
            </button>
            <button
              className={`tab-link ${activeTab === "skill" ? "active" : ""}`}
              onClick={() => setActiveTab("skill")}
            >
              <FaCode className="tab-icon" /> Skills
            </button>
            <button
              className={`tab-link ${activeTab === "journey" ? "active" : ""}`}
              onClick={() => setActiveTab("journey")}
            >
              <FaRoute className="tab-icon" /> Journey
            </button>
            <button
              className={`tab-link ${activeTab === "ranking" ? "active" : ""}`}
              onClick={() => setActiveTab("ranking")}
            >
              <FaTrophy className="tab-icon" /> Ranking
            </button>
            <button
              className={`tab-link ${activeTab === "socialmedia" ? "active" : ""}`}
              onClick={() => setActiveTab("socialmedia")}
            >
              <FaShareAlt className="tab-icon" /> Social Media
            </button>
          </nav>

          {/* Tab Content */}
          <div className="tab-content">{renderTabContent()}</div>
        </div>
      </section>

      {/* ✅ Certificates Preview Section */}
      <section className="certificates-preview" id="certificates">
        <div className="cert-header">
          <motion.h1
            className="cert-title"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="cert-icon">🎓</span> Certifications
          </motion.h1>
        </div>

        <div className="cert-grid">
          {certificateData.slice(0, 3).map((cert) => (
            <motion.div
              key={cert.id}
              className="cert-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={cert.img} alt={cert.platform} className="cert-img" />
              <h4>{cert.title}</h4>
              <p>{cert.platform}</p>
            </motion.div>
          ))}
        </div>

        {/* Button Right Aligned */}
        <div className="view-more-container">
          <Link to="/Certificate" className="view-more-btn">
            View More →
          </Link>
        </div>
      </section>

      {/* ✅ Projects Preview Section */}
      <section className="projects-preview" id="projects">
        <div className="cert-header">
          <motion.h1
            className="cert-title"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="cert-icon">💻</span> Projects
          </motion.h1>
        </div>

        <div className="cert-grid">
          {projectData.slice(0, 3).map((proj) => (
            <motion.div
              key={proj.id}
              className="cert-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={proj.image} alt={proj.title} className="cert-img" />
              <h4>{proj.title}</h4>
              <p>{proj.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="view-more-container">
          <Link to="/Projects" className="view-more-btn">
            View More →
          </Link>
        </div>
      </section>

      {/* ✅ Contact Us Section */}
      <section className="contact-preview" id="contact">
        <div className="cert-header">
          <motion.h1
            className="cert-title"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="cert-icon">📩</span> Contact Us
          </motion.h1>
        </div>

        <div className="contact-container">
          {/* Left Form */}
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="view-more-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Map */}
          <div className="contact-map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.3500522750714!2d80.93460027495588!3d26.86157477668168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995559d52f2d7f%3A0x12345!2sLucknow!5e0!3m2!1sen!2sin!4v1693560198092!5m2!1sen!2sin"
              width="100%"
              height="80%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Button Right Aligned (Below Map & Form) */}
        <div className="view-more-container">
          <Link to="/Contact" className="view-more-btn">
            View More →
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
