import React, { useState } from "react";
import { auth } from "../../firebaseConfig"; // Import Firebase Auth
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // For redirection
import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import "./LoginForm.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // Initialize navigation hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Login successful!");
      navigate("/home"); // Redirect to home page
    } catch (error) {
      alert("Invalid credentials! Please register or check your login details.");
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="loginForm-container">
        <div className="loginForm-box">
          <h1 className="loginForm-title">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="loginForm-field">
              <input
                name="email"
                type="email"
                placeholder="Enter email address"
                className="loginForm-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="loginForm-field">
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                className="loginForm-input"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <button type="submit" className="loginForm-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
