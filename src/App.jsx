import "./App.css";
import React, { useState } from "react";
import HeroSection from "./components/Hero";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isShopNowOpen, setIsShopNowOpen] = useState(false);

  const openModal = (type) => {
    if (type === "login") setIsLoginOpen(true);
    if (type === "register") setIsRegistrationOpen(true);
    if (type === "shopNow") setIsShopNowOpen(true);
  };

  const closeModal = (type) => {
    if (type === "login") setIsLoginOpen(false);
    if (type === "register") setIsRegistrationOpen(false);
    if (type === "shopNow") setIsShopNowOpen(false);
  };

  const websites = [
    { name: "Flipkart", url: "https://flipkart.com" },
    { name: "Amazon", url: "https://www.amazon.com/" },
    { name: "Myntra", url: "https://www.myntra.com/" },
    { name: "Ajio", url: "https://www.Ajio.com/" },
    { name: "Meesho", url: "https://www.Meesho.com/" },
    { name: "Limeroad", url: "https://www.Limeroad.com/" },
  ];

  return (
    <div>
      <HeroSection openModal={openModal} />

      {isLoginOpen && <LoginForm closeModal={() => closeModal("login")} />}
      {isRegistrationOpen && <RegistrationForm closeModal={() => closeModal("register")} />}

      {isShopNowOpen && (
        <div className="shopnow-modal modal">
          <div className="modal-content">
            <h2>Select a Website</h2>
            <ul>
              {websites.map((site) => (
                <li key={site.url}>
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    {site.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="close-btn" onClick={() => closeModal("shopNow")}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
