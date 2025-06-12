// components/Navbar.jsx
import "./Navbar.css";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="brand-name">CropGuard</h1>
      </div>
      <ul className="navbar-links">
        <li><Link className="a" to="/">Home</Link></li>
        <li><Link className="a" to="/about">About</Link></li>
        <li><Link className="a" to="/nodes">Nodes</Link></li>
        <li><Link className="a" to="/reports">Reports</Link></li>
        <li><Link className="a" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
