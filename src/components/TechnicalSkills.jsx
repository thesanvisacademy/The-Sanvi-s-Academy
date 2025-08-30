// src/pages/TechnicalSkills.jsx
import React from "react";
import { Link } from "react-router-dom";

const TechnicalSkills = () => {
  return (
    <div className="technical-skills-page">
      <h1>Technical Skills</h1>
      <p>Explore our tech-focused coaching programs:</p>

      <ul>
        <li>
          <Link to="/cybersecurity">Cybersecurity</Link>
        </li>
        {/* Future options */}
        {/* <li><Link to="/ai">Artificial Intelligence</Link></li>
        <li><Link to="/datascience">Data Science</Link></li> */}
      </ul>
    </div>
  );
};

export default TechnicalSkills;
