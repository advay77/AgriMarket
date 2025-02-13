import React, { useState } from 'react';
import './Contacts.css';
import Navbar2 from './Navbar2';



function Contacts2() {
  const [formData, setFormData] = useState({
    name: '',
    type: 'farmer',
    crop: '',
    quantity: '',
    phone: '',
    email: '',
    message: '',
    state: 'Uttar Pradesh',
    district: '',
    sellingLocation: ''
  });

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal"
  ];

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <Navbar2/>
      <div className="contact-wrapper">
        <div className="header">
          <div className="logo">
            <span className="logo-placeholder">🌱</span>
          </div>
          <h1>Farmer-Buyer Connection</h1>
          <p>Connect Directly with Agricultural Partners</p>
        </div>

        <div className="content-grid">
          {/* Market Information */}
          <div className="info-card">
            <div className="card-content">
              <h2>
                <span className="section-icon">🛒</span> 
                Market Information
              </h2>
              <div className="info-list">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <p className="label">Market Location</p>
                    <p className="value">Uttar Pradesh, India</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <p className="label">Helpline</p>
                    <p className="value">+91 (Kisan Helpline)</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">✉️</span>
                  <div>
                    <p className="label">Email</p>
                    <p className="value">support@agrimarket.com</p>
                  </div>
                </div>
              </div>

              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14592480.76352364!2d70.21855867175688!3d26.75658366761605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39994e9f7b4a09d3%3A0xf6a5476d3617249d!2sUttar%20Pradesh!5e0!3m2!1sen!2sin!4v1738679250925!5m2!1sen!2sin"
                  className="map"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <h2>
                <span className="section-icon">🚜</span>
                Crop Information Form
              </h2>
              
              <div className="form-fields">
                <div className="form-group">
                  <label htmlFor="type">I am a:</label>
                  <select
                    id="type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="farmer">Farmer</option>
                    
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                  />
                </div>

                {formData.type === 'farmer' && (
                  <div className="location-fields">
                    <div className="form-group">
                      <label htmlFor="state">State</label>
                      <select
                        id="state"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="location-select"
                      >
                        {indianStates.map((state) => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="district">District/City</label>
                      <input
                        type="text"
                        id="district"
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        placeholder="Enter your district or city"
                        className="location-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="sellingLocation">Preferred Selling Location</label>
                      <input
                        type="text"
                        id="sellingLocation"
                        value={formData.sellingLocation}
                        onChange={(e) => setFormData({ ...formData, sellingLocation: e.target.value })}
                        placeholder="Enter the location where you want to sell"
                        className="location-input"
                      />
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="crop">Crop Name</label>
                  <input
                    type="text"
                    id="crop"
                    value={formData.crop}
                    onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                    placeholder="e.g., Wheat, Rice, etc."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="quantity">Quantity (in KG)</label>
                  <input
                    type="text"
                    id="quantity"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g., 1000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Information</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any other details you'd like to share"
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  <span>Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts2

