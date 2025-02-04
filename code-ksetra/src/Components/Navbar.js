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
  } from "react-icons/fa"
  import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-brand">
          <FaStore className="brand-icon" />
          <span>AgriMarket</span>
        </div>

        <div className="nav-links">
          <Link to="/my-app" className="nav-link">
            <FaHome className="nav-icon" />
            <span>Home</span>
          </Link>
          <Link to="/my-app/market" className="nav-link">
            <FaStore className="nav-icon" />
            <span>Market</span>
          </Link>
          <Link to="/my-app/ai-assistant" className="nav-link">
            <FaRobot className="nav-icon" />
            <span>AI Assistant</span>
          </Link>
          <Link to="/my-app/contact" className="nav-link">
            <FaPhone className="nav-icon" />
            <span>Contact</span>
          </Link>
          <Link to="/my-app/about" className="nav-link">
            <FaInfoCircle className="nav-icon" />
            <span>About</span>
          </Link>
        </div>

        <div className="nav-auth">
          <Link to="/my-app/login" className="auth-link">
            <FaUser className="auth-icon" />
            <span>Login</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
