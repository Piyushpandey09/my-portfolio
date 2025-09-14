import React from "react";
import "../Style/SocialMediaPage.css";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

function SocialMediaPage() {
  const socialLinks = [
    {
      id: 1,
      platform: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/piyush-pandey-dev/",
      description: "Connect professionally and grow.",
      className: "linkedin"
    },
    {
      id: 2,
      platform: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/Piyushpandey09",
      description: "Explore my projects and contributions.",
      className: "github"
    },
    {
      id: 3,
      platform: "Twitter",
      icon: <FaTwitter />,
      url: "https://x.com/princepandey09",
      description: "Follow for tech thoughts & updates.",
      className: "twitter"
    },
    {
      id: 4,
      platform: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/princepandey09/",
      description: "Behind the scenes & personal updates.",
      className: "instagram"
    },
    {
      id: 5,
      platform: "YouTube",
      icon: <FaYoutube />,
      url: "https://www.youtube.com/@piyushpandey1146",
      description: "Tutorials, talks & coding content.",
      className: "youtube"
    },
    {
      id: 6,
      platform: "Facebook",
      icon: <FaFacebook />,
      url: "https://facebook.com/",
      description: "Stay connected on Facebook.",
      className: "facebook"
    },
  ];

  return (
    <div className="social-container">
      <h2 className="social-heading">🌐 Social Media Presence</h2>
      <p className="social-subtitle">
        Explore my digital footprint across platforms.
      </p>

      <div className="social-grid">
        {socialLinks.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-card ${item.className}`}
          >
            <div className="social-icon">{item.icon}</div>
            <h3>{item.platform}</h3>
            <p>{item.description}</p>
            <span className="visit-btn">Visit Profile</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialMediaPage;
