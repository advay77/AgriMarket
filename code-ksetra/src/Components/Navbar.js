import React from 'react'
import {
    FaHome,
    FaStore,
    FaRobot,
    FaPhone,
    FaInfoCircle,
    FaUser,
    FaBars,
    FaSignOutAlt,
    FaBox,
    FaHistory,
    FaCog,
    FaNewspaper,
    FaCheck,
    FaPlus,
    FaCommentAlt,
    FaComments,
  } from "react-icons/fa"
  import { Link } from 'react-router-dom'
  import './Navbar.css'
  

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-brand">
          <FaStore className="brand-icon" />
          <span>AgriMarket</span>
        </div>

        <div className="nav-links">
          <Link to="/my-app/farmer" className="nav-link">
            <FaHome className="nav-icon" />
            <span>Home</span>
          </Link>

          <Link to="/my-app/products" className="nav-link">
            <FaBox className="nav-icon" />
            <span>Products</span>
          </Link>
          
          <Link to="/my-app/ai-assistant" className="nav-link">
            <FaComments className="nav-icon" />
            <span>Ai-Assistance</span>
          </Link>
          <Link to="/my-app/contact" className="nav-link">
            <FaPhone className="nav-icon" />
            <span>Contact</span>
          </Link>
          <Link to="/my-app/news" className="nav-link">
            <FaNewspaper className="nav-icon" />
            <span>News</span>
          </Link>

        </div>

        <div className="nav-auth">
          <Link to="/my-app/profile" className="auth-link">
            <FaUser className="auth-icon" />
            <span>Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
