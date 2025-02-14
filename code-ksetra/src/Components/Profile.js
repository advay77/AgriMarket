import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";  
import { 
  Home,
  BookOpen,
  LogOut,
  User,
  Camera,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  ArrowLeft
} from 'lucide-react';
import './Profile.css';

function Profile() {
  const navigate = useNavigate();  

  const [formData, setFormData] = useState({
    email: "Email@example.com",
    firstName: "Name",
    lastName: "Last Name",
    phone: "Phone Number",
    location: "Location",
    joinDate: "Join Date",
    position: "Position",
    bio: "Your Bio Here..."
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showProfileOverlay, setShowProfileOverlay] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    const notification = document.querySelector('.notification');
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  };

  return (
    <div className="app-container">
      {/* Back Button for Navigation */}
      <button className="back-button" onClick={() => navigate(-1)}>
        <ArrowLeft size={20} /> Back
      </button>

      <div className="sidebar">
        <div 
          className="profile-image-container"
          onMouseEnter={() => setShowProfileOverlay(true)}
          onMouseLeave={() => setShowProfileOverlay(false)}
        >
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
            alt="Profile" 
            className="profile-img" 
          />
          <div className={`profile-overlay ${showProfileOverlay ? 'show' : ''}`}>
            <Camera size={24} />
            <span>Change Photo</span>
          </div>
        </div>
        
        <div className="user-info">
          <h2>{formData.firstName} {formData.lastName}</h2>
          <p className="user-position">{formData.position}</p>
        </div>

        {/* Navigation Links */}
        <nav className="menu">
          <Link to="/my-app/farmer" className="menu-item">
            <Home size={20} />
            <span>Dashboard</span>
          </Link>
          <Link to="/my-app/profile" className="menu-item active">
            <User size={20} />
            <span>Profile</span>
          </Link>
          <Link to="/my-app/About" className="menu-item">
            <BookOpen size={20} />
            <span>About</span>
          </Link>
          <Link to="/my-app/Login" className="menu-item logout">
            <LogOut size={20} />
            <span>Logout</span>
          </Link>
        </nav>
      </div>

      <main className="content">
        <div className="header">
          <h1>Profile Settings</h1>
          <button 
            className={`edit-button ${isEditing ? 'active' : ''}`}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <div className="profile-grid">
          <div className="info-card">
            <h3>Personal Information</h3>
            <div className="info-item">
              <Mail size={18} />
              <span>{formData.email}</span>
            </div>
            <div className="info-item">
              <Phone size={18} />
              <span>{formData.phone}</span>
            </div>
            <div className="info-item">
              <MapPin size={18} />
              <span>{formData.location}</span>
            </div>
            <div className="info-item">
              <Calendar size={18} />
              <span>Joined {formData.joinDate}</span>
            </div>
            <div className="info-item">
              <Briefcase size={18} />
              <span>{formData.position}</span>
            </div>
          </div>

          <div className="card">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  disabled={!isEditing}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location" 
                  value={formData.location} 
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea 
                  id="bio" 
                  name="bio" 
                  value={formData.bio} 
                  onChange={handleChange}
                  disabled={!isEditing}
                  rows={4}
                />
              </div>

              {isEditing && (
                <button type="submit" className="submit-btn">
                  Save Changes
                </button>
              )}
            </form>
          </div>
        </div>
      </main>

      <div className="notification">
        Changes saved successfully!
      </div>
    </div>
  );
}

export default Profile;
