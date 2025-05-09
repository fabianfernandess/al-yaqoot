// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="custom-navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="AL YAQOOT" className="logo-image" />
        </div>
        <nav className="nav-links">
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/services" className="nav-link">Services</NavLink>
          <NavLink to="/contact" className="nav-link contact-btn">Contact us</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
