import React, { useState } from "react";
import { FaHome, FaBookOpen, FaKey, FaSignOutAlt,FaUser } from "react-icons/fa";
import "./Profile.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Profile = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: ""
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-container">
      <Navbar/>
      {/* Sidebar */}
      <div className="sidebar">
        <FaUser/>
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fdefault-profile-picture&psig=AOvVaw39tmlCzAXpC4FbeqfFBFeV&ust=1739128049040000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKD15f_itIsDFQAAAAAdAAAAABAK"
          alt="Profile"
          className="profile-img"
        />
        <ul className="menu">
          <Link to="/my-app/farmer">
          <li><FaHome className="icon" /> Dashboard</li>
          </Link>
          <Link to="/my-app/profile">
          <li ><FaBookOpen className="icon" /> Account Details</li>
          </Link>
         
          
          <Link to="/my-app">
          <li><FaSignOutAlt className="icon" /> Logout</li>
          </Link>
         <Link to="/my-app/about">
         <li><FaSignOutAlt className="icon" /> About</li>
         </Link>
          
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="content">
        <h2>Account Settings</h2>
        <form className="form">
          <label>Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} disabled />
          
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          
         
        </form>
      </div>
    </div>
  );
};

export default Profile;
