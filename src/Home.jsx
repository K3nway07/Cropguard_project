import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import heroImage from "./assets/image1.jpg"; // Still used in content
import previewVideo from "./assets/preview1.mp4"; // Background video

const Home = () => {
  return (
    <div className="home-container">
      {/* 🔁 Background Video */}
      <video
        className="background-video"
        src={previewVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay content */}
      <div className="overlay">
        <div className="home-content">
          <h1 className="title">🌱 CropGuard</h1>
          <p className="description">
            Empowering agriculture with real-time monitoring using LoRa technology.
          </p>

          {/* 💡 Hero Image in foreground */}
          {/*<img src={heroImage} alt="Smart Agriculture" className="hero-image" />*/}

          <div className="button-group">
            <Link to="/about" className="btn btn-primary">Learn More</Link>
            <Link to="/nodes" className="btn btn-outline">View Nodes</Link>
          </div>

          <div className="features">
            <div className="feature-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnXPA0AwG8eHDc1DjyivgN04S-u_O15ypnlQ&s" alt="Connectivity" />
              <span>Long-Range LoRa</span>
            </div>
            <div className="feature-card">
              <img src="https://img.icons8.com/ios-filled/50/4CAF50/shield.png" alt="Protection" />
              <span>Real-time Protection</span>
            </div>
            <div className="feature-card">
              <img src="https://img.icons8.com/ios-filled/50/4CAF50/plant-under-sun.png" alt="Sustainability" />
              <span>Sustainable Farming</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
