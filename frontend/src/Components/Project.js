// Projects.js
import React from "react";
import "../Style/Project.css";
import { FaCode } from "react-icons/fa";

// 👇 Image imports
import textImg from "../Assets/image copy.png";
import calsiImg from "../Assets/image.png";
import qrImg from "../Assets/QrCode.png";
import TodoApp from "../Assets/image copy 2.png";
import Leave from "../Assets/Leave.png";
import MyProfile from "../Assets/MyProfile.png";

export const projectData = [   // 👈 ab export kar rahe hai
  {
    id: 1,
    image: textImg,
    title: "Textify",
    description: "A text analyzer app with features like uppercase, lowercase, word count, etc.",
    github: "https://github.com/Piyushpandey09/textify",
    techStack: ["React", "JavaScript", "Bootstrap"],
  },
  {
    id: 2,
    image: calsiImg,
    title: "calsi_calcu",
    description: "A calculator built with React leveraging component-based architecture.",
    github: "https://github.com/Piyushpandey09/calsi_calcu",
    techStack: ["React", "CSS", "JavaScript"],
  },
  {
    id: 3,
    image: qrImg,
    title: "qr-code-generator",
    description: "Generates customizable QR codes from text/URLs. Downloadable.",
    github: "https://github.com/Piyushpandey09/qr-code-generator",
    techStack: ["React", "HTML", "CSS"],
  },
  {
    id: 4,
    image: TodoApp,
    title: "TodoApp",
    description: "ToDo app for adding, editing, and deleting tasks.",
    github: "https://github.com/Piyushpandey09/TodoApp",
    techStack: ["React", "JavaScript", "CSS"],
  },
  {
    id: 5,
    image: Leave,
    title: "Leave_Management_System",
    description: "Streamlined employee leave tracking & approval system.",
    github: "https://github.com/Piyushpandey09/Leave-Management-System",
    techStack: ["React", "Firebase", "Bootstrap"],
  },
  {
    id: 6,
    image: MyProfile,
    title: "MY_Profilecraft",
    description: "Portfolio site built using React.",
    github: "https://github.com/Piyushpandey09/TodoApp",
    techStack: ["React", "HTML", "CSS"],
  },
];

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="animated-title">PROJECTS</div>
      <div className="container">
        <div className="row">
          {projectData.map((project) => (
            <div key={project.id} className="col-md-4 mb-5">
              <div className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-body">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>

                  <div className="tech-stack">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tech-pill">{tech}</span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    View on GitHub
                  </a>
                </div>
                <div className="code-icon">
                  <FaCode />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
