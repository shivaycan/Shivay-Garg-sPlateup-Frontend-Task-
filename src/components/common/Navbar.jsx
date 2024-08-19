import React, { useState, useEffect } from "react";
import "../../css/Navbar.css";
import { navItems } from "../../utils/Json data/Navlinks";
import Logo from "../../assets/icons/app-logo.svg";
import Cross from "../../assets/icons/cross-icon.svg";
import Menu from "../../assets/icons/menu-icon.svg";
import Dropdown from "../../assets/icons/dropdown-icon.svg";

import RightIcon from "../../assets/icons/right-arrow-icon.svg";
const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    // Cleanup on component unmount
    return () => document.body.classList.remove("menu-open");
  });

  return (
    <>
      <nav className="nav">
        <div className="logo-section">
          <div className="logo">
            <img src={Logo} alt="app-logo" />
          </div>
          <div className="logo-heading">ProVital</div>
        </div>
        <ul className="web-nav">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href="#">{item.name}</a>
            </li>
          ))}
          <li
            className="login-dropdown"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Login / Signup{" "}
            <span>
              <img
                src={Dropdown}
                alt="dropdown-icon"
                className={`${hovered ? "rotate" : ""}`}
              />
            </span>
          </li>

          {hovered && (
            <div
              className="dropdown"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="dropdown-item">
                <div className="title">Doctor</div>
                <div className="dropdown-links">
                  <a href="#">Login</a>
                  <a href="#">Sign up</a>
                </div>
              </div>
              <div className="dropdown-item">
                <div className="title">Patients</div>
                <div className="dropdown-links">
                  <a href="#">Login</a>
                  <a href="#">Sign up</a>
                </div>
              </div>
            </div>
          )}
        </ul>
        <div onClick={toggleMenu} className="toggle-btn">
          <a href="#">
            <img src={isOpen ? Cross : Menu} alt="" />
          </a>
        </div>
      </nav>

      {/* Mobile nav */}
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul className="mobile-nav">
          <div className="dropdown">
            <div className="dropdown-item">
              <div className="title">Doctor</div>
              <div className="dropdown-links">
                <a href="#">Login</a>
                <a href="#">Sign up</a>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="title">Patients</div>
              <div className="dropdown-links">
                <a href="#">Login</a>
                <a href="#">Sign up</a>
              </div>
            </div>
          </div>
          <div>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href="#" onClick={toggleMenu}>
                  {item.name}
                </a>
                <img src={RightIcon} alt="icon" />
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
