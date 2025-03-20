import React, { useState } from "react";
import { IoReorderFour } from "react-icons/io5";  
import { FaHome, FaCalendarAlt, FaEnvelope, FaMicrochip, FaTheaterMasks,FaGlobe  } from "react-icons/fa";  
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      
      {!isOpen && (
        <span className="open-btn" onClick={toggleNav}>
          <IoReorderFour style={{ color:"white", border:"2px #9b07f7",  }} size={30} />
        </span>
      )}

      
      <div className={`sidenav ${isOpen ? "open" : ""}`}>
        <span className="closebtn" onClick={() => setIsOpen(false)}>
          &times;
        </span>

       
        <Link className="navstyle" to="/" onClick={() => setIsOpen(false)}>
          <FaHome size={20} style={{ marginRight: "10px" }} /> Home
        </Link>

       
        <div className="dropdown">
          <span className="navstyle">
            <FaCalendarAlt size={20} style={{ marginRight: "10px" }} /> Events ▾
          </span>
          <div className="dropdown-content">
            <Link style={{ marginRight: "12px" }} to="/techevents" onClick={() => setIsOpen(false)}>
              <FaMicrochip size={18} style={{ marginRight: "6px" }} /> Tech Events
            </Link>
            <Link to="/nontechevents" onClick={() => setIsOpen(false)}>
              <FaTheaterMasks size={23} style={{ marginRight: "6px" }} /> Non-Tech Events
            </Link>
            <Link to="/online" onClick={() => setIsOpen(false)}>
              <FaGlobe  size={23} style={{ marginRight: "6px" }} /> Online-Events
            </Link>
          </div>

        </div>

       
        <Link className="navstyle" to="/contacts" onClick={() => setIsOpen(false)}>
          <FaEnvelope size={20} style={{ marginRight: "10px" }} /> Contact
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
