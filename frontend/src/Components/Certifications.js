import React from "react";
import "../Style/Certifications.css";

// 👇 Image import
import HackerRank from "../Assets/HackerRank.png";
import udemy from "../Assets/udemy.png";
import testdemo from "../Assets/testdemo.png";

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
  {
    id: 4,
    title: "React Basic : Programming Fundamentals",
    platform: "HackerRank",
    link: "https://www.hackerrank.com/certificates/c54104c9b7bb",
    img: HackerRank,
  },
  {
    id: 5,
    title: "Java (Basic) Certificate : Programming Fundamentals",
    platform: "Udemy",
    link: "https://www.udemy.com/certificate/UC-64d8560e-535f-4592-9694-a6844a6cca87/",
    img: udemy,
  },
  {
    id: 6,
    title: "Web Development Certificate : Programming Fundamentals",
    platform: "Udemy",
    link: "https://www.udemy.com/certificate/UC-e464d351-33a1-4ab0-a10d-564e9ec8dff3/",
    img: udemy,
  },
  {
    id: 7,
    title: "SQL Server: Certificate Programming Fundamentals",
    platform: "TestDome",
    link: "https://www.testdome.com/certificates/1d53c44ff0e044f3ae714a4b1ff78056",
    img: testdemo,
  },
];

const Certificates = () => {
  return (
    <div className="certificates-section">
      <div className="animated-title">CERTIFICATES</div>
      <div className="container">
        <div className="row">
          {certificateData.map((cert) => (
            <div key={cert.id} className="col-md-4 mb-5">
              <div className="certificate-card">
                <img
                  src={cert.img}
                  alt={cert.platform}
                  className="certificate-img"
                />
                
                <div className="certificate-body">
                  <h4>{cert.title}</h4>
                  <p>{cert.platform}</p>
                  
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    View Certificate
                  </a>
                </div>
                <div className="certificate-icon">🏅</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
