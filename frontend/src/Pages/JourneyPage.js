import React, { useState } from "react";
import "../Style/JourneyPage.css";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaProjectDiagram,
  FaStar,
} from "react-icons/fa";

function JourneyPage() {
  const [activeTab, setActiveTab] = useState("education");

  const renderContent = () => {
    switch (activeTab) {
      case "education":
        return (
          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-icon"><FaGraduationCap /></div>
              <div className="timeline-content">
                <h3>HIGH SCHOOL (10)</h3>
                <h4>VSS VIDYA MANDIR, ARKHA</h4>
                <p>
                  "Completed Class 1 to Class 10 education with a GPA of 8 in the Class 10 Examination."
                </p>
                <span className="timeline-date">2004 - 2016</span>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-icon"><FaGraduationCap /></div>
              <div className="timeline-content">
                <h3>INTERMIDATE (12)</h3>
                <h4>VSS VIDYA MANDIR, ARKHA</h4>
                <p>
                "Successfully completed Class 12 education with a strong academic performance, securing a CGPA of 7.5 in the Board Examination."
                </p>
                <span className="timeline-date">2016 - 2018</span>
              </div>
            </div>

             <div className="timeline-item Left">
              <div className="timeline-icon"><FaGraduationCap /></div>
              <div className="timeline-content">
                <h3>BACHELOR’S DEGREE</h3>
                <h4>SIET PRAYAGRAJ</h4>
                <p>
                "Completed Bachelor of Technology (B.Tech) in Computer Science and Engineering with a CGPA of 7.5."
                </p>
                <span className="timeline-date">2019 - 2023</span>
              </div>
            </div>
            {/* Timeline End Marker */}
            <div className="timeline-end">
              <FaStar />
            </div>
          </div>
        );

      case "experience":
        return (
          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-icon"><FaBriefcase /></div>
              <div className="timeline-content">
                <h3> Trainee Software Engineer</h3>
                <h4>EICE Technology</h4>
                <p>
                  Worked on frontend and backend development with React,
                  Node.js, and SQL.
                </p>
                <span className="timeline-date">2023 - 2024</span>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-icon"><FaBriefcase /></div>
              <div className="timeline-content">
                <h3>Software  Developer</h3>
                <h4>National informatics center (NIC)</h4>
                <p>
                  Led a team of 5 developers, built scalable web apps, and
                  improved system efficiency by 30%.
                </p>
                <span className="timeline-date">2024 - Present</span>
              </div>
            </div>
            <div className="timeline-end">
              <FaStar />
            </div>
          </div>
        );

      case "technical":
  return (
    <div className="timeline">
      <div className="timeline-item left">
        <div className="timeline-icon"><FaLaptopCode /></div>
        <div className="timeline-content">
          <h3>Frontend Skills</h3>
          <p>
            React.js • JavaScript • HTML • CSS • Tailwind CSS • Redux
          </p>
        </div>
      </div>

      <div className="timeline-item right">
        <div className="timeline-icon"><FaLaptopCode /></div>
        <div className="timeline-content">
          <h3>Backend Skills</h3>
          <p>
            Node.js • Express.js • SQL • MongoDB • REST APIs
          </p>
        </div>
      </div>

      <div className="timeline-item left">
        <div className="timeline-icon"><FaLaptopCode /></div>
        <div className="timeline-content">
          <h3>Platforms & Tools</h3>
          <p>
            Git • GitHub • Docker • VS Code • Postman
          </p>
        </div>
      </div>

      <div className="timeline-item right">
        <div className="timeline-icon"><FaLaptopCode /></div>
        <div className="timeline-content">
          <h3>Non-Technical Skills</h3>
          <p>
            Teamwork • Communication • Problem Solving • Time Management
          </p>
        </div>
      </div>

      <div className="timeline-end">
        <FaStar />
      </div>
    </div>
  );


      case "project":
        return (
          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-icon"><FaProjectDiagram /></div>
              <div className="timeline-content">
                <h3>Leave Management System</h3>
                <p>
                  A full-stack web application with employee and admin
                  dashboards, leave requests, and policy management.
                </p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-icon"><FaProjectDiagram /></div>
              <div className="timeline-content">
                <h3>Portfolio Website</h3>
                <p>
                  A modern personal portfolio with animations, skills, and
                  projects using React + Tailwind.
                </p>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-icon"><FaProjectDiagram /></div>
              <div className="timeline-content">
                <h3>Textify</h3>
                <p>
                 A text analyzer app with features like uppercase, lowercase, word count, along with animations, skills, and projects built using React and Tailwind CSS.
                </p>
              </div>
            </div>
            <div className="timeline-end">
              <FaStar />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="journey-page">
      <div className="journey-tabs">
        <button
          className={activeTab === "education" ? "active" : ""}
          onClick={() => setActiveTab("education")}
        >
          Educational Journey
        </button>
        <button
          className={activeTab === "experience" ? "active" : ""}
          onClick={() => setActiveTab("experience")}
        >
          Experience Journey
        </button>
        <button
          className={activeTab === "technical" ? "active" : ""}
          onClick={() => setActiveTab("technical")}
        >
          Technical Journey
        </button>
        <button
          className={activeTab === "project" ? "active" : ""}
          onClick={() => setActiveTab("project")}
        >
          Project Journey
        </button>
      </div>
      <div className="journey-content">{renderContent()}</div>
    </div>
  );
}

export default JourneyPage;
