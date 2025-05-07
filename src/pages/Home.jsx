// src/pages/Home.jsx


import heroImage from "../assets/hero-image.png";
import "../styles/home.css";

const Home = () => (
  <section className="home-hero">
    <div className="hero-left">
      <h1>Dubai’s Leading Signage Company<br/> Custom Signs That Make an Impact</h1>
      <p>As a trusted signboard company in Dubai, we specialize in end-to-end signage solutions – from design and fabrication to installation. Whether you need indoor branding, outdoor signage, or vehicle graphics, our team delivers high-quality, customized signs that enhance your visibility and elevate your brand.</p>
      <button className="cta-btn">Get in touch</button>
    </div>
    <div className="hero-right">
      <img src={heroImage} alt="Signage display" />
    </div>
  </section>
);

export default Home;
