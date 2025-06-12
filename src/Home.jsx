import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaBroadcastTower, FaShieldAlt } from "react-icons/fa";
import "./Home.css"; // Import custom CSS

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-box">
        <div className="logo-section">
          <FaLeaf className="logo-icon" />
          <h1 className="title">CropGuard</h1>
        </div>

        <p className="description">
          A smart agricultural surveillance system powered by LoRa technology to monitor crop conditions in real-time and prevent damage.
        </p>

        <div className="button-group">
          <Link to="/about" className="btn btn-primary">Learn More</Link>
          <Link to="/nodes" className="btn btn-outline">View Nodes</Link>
        </div>

        <div className="features">
          <div className="feature-item">
            <FaBroadcastTower className="feature-icon" />
            <span>Long-Range Connectivity</span>
          </div>
          <div className="feature-item">
            <FaShieldAlt className="feature-icon" />
            <span>Damage Prevention</span>
          </div>
          <div className="feature-item">
            <FaLeaf className="feature-icon" />
            <span>Sustainable Agriculture</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
