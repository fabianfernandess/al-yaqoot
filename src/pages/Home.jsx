// src/pages/Home.jsx


import heroImage from "../assets/hero-image.png";
import "../styles/home.css";

const Home = () => (
  <section className="home-hero">
    <div className="hero-left">
      <h1>The Future of Signage</h1>
      <p>From Design to installation, <br /> We bring signs to life</p>
      <button className="cta-btn">Get in touch</button>
    </div>
    <div className="hero-right">
      <img src={heroImage} alt="Signage display" />
    </div>
  </section>
);

export default Home;
