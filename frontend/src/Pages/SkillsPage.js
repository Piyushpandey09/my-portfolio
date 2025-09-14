import React, { useState } from "react";
import "../Style/SkillsPage.css";

function SkillsPage() {
  const [activeTab, setActiveTab] = useState("technical");

  const skills = {
    technical: [
      { name: "REACT JS", percent: 75, color: "#FF4C61" },
      { name: "C++", percent: 75, color: "#33FFB3" },
      { name: "JAVA", percent: 80, color: "#339CFF" },
      { name: "JavaScript", percent: 71, color: "#F4FF61" },
      { name: "HTML/CSS", percent: 68, color: "#FF3EC9" },
      { name: "Node.js", percent: 66, color: "#FF9333" },
      { name: "C LANGUANGE", percent: 66, color: "#100277ff" },
     { name: "BOOTSTRAP", percent: 66, color: "#5d0636ff" },

    ],
    personal: [
      { name: "Communication", percent: 85, color: "#FFD700" },
      { name: "Teamwork", percent: 80, color: "#87CEFA" },
      { name: "Problem Solving", percent: 78, color: "#90EE90" },
    ],
    toolkit: [
  { name: "VS Code", img: require("../Assets/vscode.png") },
  { name: "PyCharm", img: require("../Assets/pycharm.png") },
  { name: "Git", img: require("../Assets/git.png") },
  { name: "GitHub", img: require("../Assets/github.png") },
  { name: "CodeBlocks", img: require("../Assets/codeblocks.png") },
  { name: "PostgreSQL", img: require("../Assets/mssql.png") },
  { name: "Postman", img: require("../Assets/postman.png") },
  { name: "Chrome", img: require("../Assets/chrome.png") },
]


  };

   const renderSkills = (list) => {
  if (activeTab === "toolkit") {
    return list.map((tool, index) => (
      <div key={index} className="toolkit-item">
        <img src={tool.img} alt={tool.name} />
        <p>{tool.name}</p>
      </div>
    ));
  }

  return list.map((skill, index) => (
    <div key={index} className="skill-item">
      <div className="skill-percent" style={{ color: skill.color }}>
        {skill.percent}%
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            width: `${skill.percent}%`,
            backgroundColor: skill.color,
          }}
        />
      </div>
      <div className="skill-name">{skill.name}</div>
    </div>
  ));
};


  return (
    <div className="skills-page">
      {/* Tabs */}
      <div className="skills-tabs">
        <button
          className={`skills-tab ${activeTab === "technical" ? "active" : ""}`}
          onClick={() => setActiveTab("technical")}
        >
          Technical Skill
        </button>
        <button
          className={`skills-tab ${activeTab === "personal" ? "active" : ""}`}
          onClick={() => setActiveTab("personal")}
        >
          Personal Skill
        </button>
        <button
          className={`skills-tab ${activeTab === "toolkit" ? "active" : ""}`}
          onClick={() => setActiveTab("toolkit")}
        >
          Toolkit
        </button>
      </div>

      {/* Title */}
      <h2 className="skills-title">
        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Skills
      </h2>

      {/* Skills */}
      <div className="skills-grid">
        {renderSkills(skills[activeTab])}
      </div>
    </div>
  );
}

export default SkillsPage;
