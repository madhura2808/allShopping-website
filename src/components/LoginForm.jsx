import React, { useState } from "react";

const LoginForm = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    closeModal(); // Close the form after submission
  };

  return (
    <div className="login-modal">
      <div className="modal-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </form>
        {/* Buttons outside the form */}
        <div className="form-actions">
          <button onClick={handleSubmit} type="button">
            Login
          </button>
          <button className="close-btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
