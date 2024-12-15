import React from "react";

const HeroSection = ({ openModal }) => {
  return (
    <main className="hero container">
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
      <div className="hero-btn">
        <button onClick={() => openModal("login")}>Login</button>
        <button onClick={() => openModal("register")}>Register</button>
        <button onClick={() => openModal("shopNow")}>Shop Now</button>
      </div>

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
  <img
    src="/shampoo.webp"
    alt="Shampoo"
    className="product-image"
    style={{ width: "300px", height: "400px" }}
  />


<img
    src="/sport.webp"
    alt="Sport"
    className="product-image"
    style={{ width: "300px", height: "300px" }}
  />
</div>

    </main>
  );
};

export default HeroSection;
