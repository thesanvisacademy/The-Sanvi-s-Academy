import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Academy.png";

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-section">
        <Link to="/">
          <img src={logo} alt="Logo" className="globe-img" />
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li
          className={`dropdown ${activeDropdown === "Courses" ? "open" : ""}`}
          ref={dropdownRef}
        >
          <span
            className="dropdown-toggle"
            onClick={() => toggleDropdown("Courses")}
          >
            Courses Type 
          </span>

          {activeDropdown === "Courses" && (
            <div className="dropdown-menu">
              <div className="dropdown-items">
                <Link to="/courses" onClick={() => setActiveDropdown(null)}>
                  Language Skills
                </Link>
                <Link
                  to="/technical-skills"
                  onClick={() => setActiveDropdown(null)}
                >
                  Technical Skills
                </Link>
              </div>
            </div>
          )}
        </li>

        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>

        <li>
          <Link to="/blog">Blog</Link>
        </li>

        <li>
          <Link to="/faq">FAQ</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
