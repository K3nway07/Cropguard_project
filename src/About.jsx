import React from "react";
import "./About.css"; // We'll write styles here

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About CropGuard</h1>
        <p>
          CropGuard is a smart agricultural monitoring system designed to enhance
          farming efficiency and reduce manual intervention by leveraging IoT
          technologies. It uses a network of sensors and LoRa-based communication
          to continuously monitor environmental parameters like temperature,
          humidity, and soil moisture across large crop areas. The collected data
          is displayed in real-time on a user-friendly dashboard, helping farmers
          make informed decisions and take timely action.
        </p>
      </div>
      <h2 className="components-title">Main System Coponents</h2>

      <div className="components-section">
        
        <div className="component-card">
          <div className="component-image">
            <img src="https://components101.com/sites/default/files/components/ESP8266-NodeMCU.jpg" alt="NodeMCU ESP8266" />

          </div>
          <div className="component-info">
            <h3>NodeMCU ESP8266-12E</h3>
            <p>
              Acts as the main controller and handles Wi-Fi-based communication
              with the backend or services like ThingSpeak. It reads data from
              connected sensors and displays relevant information on the OLED.
            </p>
          </div>
        </div>

        <div className="component-card">
          <div className="component-image">
            <img src="https://m.media-amazon.com/images/I/61R1A7CuHTL._AC_UF1000,1000_QL80_.jpg" alt="Arduino Nano" />
          </div>
          <div className="component-info">
            <h3>Arduino Nano</h3>
            <p>
              Used in some nodes for localized data collection and interfacing
              with sensors before transmitting to the main NodeMCU via LoRa.
            </p>
          </div>
        </div>

        <div className="component-card">
          <div className="component-image">
            <img src="https://m.media-amazon.com/images/I/51Kj-IsWKwL._AC_UF1000,1000_QL80_.jpg" alt="LoRa Module SX1278" />
          </div>
          <div className="component-info">
            <h3>SX1278 LoRa Module (RA-02 433MHz)</h3>
            <p>
              Enables long-range wireless communication between sensor nodes and
              the central monitoring system. Its low power consumption makes it
              suitable for remote field deployments.
            </p>
          </div>
        </div>

        <div className="component-card">
          <div className="component-image">
            <img src="https://www.kitkraft.in/cdn/shop/files/dht22_3.png?v=1722566827&width=2500" alt="DHT22 Sensor" />
          </div>
          <div className="component-info">
            <h3>DHT22 Temperature & Humidity Sensor</h3>
            <p>
              Measures ambient temperature and relative humidity. It provides
              accurate readings, which are vital for analyzing crop health and
              irrigation needs.
            </p>
          </div>
        </div>

        <div className="component-card">
          <div className="component-image">
            <img src="https://vayuyaan.com/wp-content/uploads/2024/05/ground-moisture-sensor.jpg" alt="LM393 Soil Moisture Sensor" />
          </div>
          <div className="component-info">
            <h3>LM393 Soil Moisture Sensor</h3>
            <p>
              Detects soil moisture level and sends an alert if the field is too
              dry. This helps in automating irrigation decisions and conserving water.
            </p>
          </div>
        </div>

        <div className="component-card">
          <div className="component-image">
            <img src="https://5.imimg.com/data5/SELLER/Default/2024/2/382306469/MW/VR/EZ/42697090/a1.png" alt="I2C OLED Display" />
          </div>
          <div className="component-info">
            <h3>I2C OLED Display</h3>
            <p>
              Displays sensor values locally on the node in a readable format.
              Useful during setup, debugging, or standalone operations without
              internet access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
