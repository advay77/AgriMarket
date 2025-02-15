import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Page2.css";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Navbar2 from "./Navbar2";

function Page() {
  const [text, setText] = useState("");
  const fullText = "Connecting Farmers and Buyers";
  const navigate = useNavigate();

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const handleGetStarted = () => {
    navigate("/products");
  };

  return (
    <div className="page">
      <Navbar2/>
      <div className="content-wrapper">
        <div className="hero-section">
          <div className="logo-container">
            <div className="logo">AgriMarket</div>
          </div>
          <div className="main-content">
            <h1 className="animated-text">{text}</h1>
            <div className="hands-container">
              <div className="hand farmer-hand">🧑‍🌾</div>
              <div className="hand buyer-hand">🛒</div>
            </div>
          </div>
          <p className="subtitle">
            Empowering farmers, satisfying buyers, one click at a time.
          </p>
          <Link to="/my-app/market">
          <button className="cta-button" onClick={handleGetStarted}>
            Get Started
          </button>
          </Link>
          
        </div>
      </div>
      <div className="features-section">
        <h2>Why Choose AgriMarket?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🌾</span>
            <h3>Direct Farm-to-Table</h3>
            <p>Connect directly with local farmers for the freshest produce.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💰</span>
            <h3>Fair Prices</h3>
            <p>Transparent pricing that benefits both farmers and buyers.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🚚</span>
            <h3>Easy Logistics</h3>
            <p>Streamlined delivery process from farm to your doorstep.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;