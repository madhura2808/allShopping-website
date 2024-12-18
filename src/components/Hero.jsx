import React, { useState } from "react";

const HeroSection = ({ openModal }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <>
     {/* Navbar */}
<nav className="navbar">
  <div className="navbar-left">
    <div className="navbar-logo">
      <img src="/Logo.jpg" alt="Logo" style={{ height: "50px", marginRight: "20px" }} />
    </div>
    <div className="hero-btn">
      <button onClick={() => openModal("login")}>Login</button>
      <button onClick={() => openModal("register")}>Register</button>
      <button onClick={() => openModal("shopNow")}>Shop Now</button>
    </div>
  </div>
  <div className="navbar-actions">
    <button onClick={toggleDarkMode} className="dark-mode-toggle">
      {darkMode ? "☀️ Day Mode" : "🌙 Night Mode"}
    </button>
  </div>
</nav>


      {/* Hero Section */}
      <main className={`hero container ${darkMode ? "dark" : ""}`}>
        <div className="hero-content">
          <h1>YOU DESERVE THE BEST PRODUCT</h1>
          <div className="text-wrapper">
            <p className="left-align">
              Unlock the world’s finest products at unbeatable prices only on Amazon. Shop now for exclusive offers and enjoy fast delivery!
            </p>
          </div>
          <p className="right-align">
            Experience the best of online shopping with Flipkart! Get top-rated brands, exclusive deals, and a shopping experience designed just for you.
          </p>

          <div className="text-wrapper">
            <p className="left-align">
              Fashion at its finest! Discover the latest trends and styles from Myntra and transform your wardrobe with the best products.
            </p>
          </div>
          <p className="right-align">
            Looking for stylish products without the hefty price tag? Meesho offers you top-quality fashion, beauty, and lifestyle items at amazing prices!
          </p>
        </div>

        {/* Buttons for Login, Register, and Shop Now */}
       

        {/* Images */}
        <div className="hero-image">
          <img
            src="/Shoes.webp"
            alt="Shoes"
            className="product-image"
            style={{ width: "350px", height: "auto" }}
          />
          <img
            src="/watch.webp"
            alt="Watch"
            className="product-image"
            style={{ width: "200px", height: "300px" }}
          />
          <img
            src="/clothes.webp"
            alt="Clothes"
            className="product-image"
            style={{ width: "250px", height: "300px" }}
          />
          <img
            src="/Gadget.webp"
            alt="Gadget"
            className="product-image"
            style={{ width: "400px", height: "400px" }}
          />
          <img
            src="/headphone.webp"
            alt="Headphone"
            className="product-image"
            style={{ width: "250px", height: "auto" }}
          />
         
        </div>
      </main>
    </>
  );
};

export default HeroSection;
