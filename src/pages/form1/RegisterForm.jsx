import "./RegisterForm.css";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import React, { useState } from "react";
import { auth } from "../../firebaseConfig"; // Import Firebase Auth
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // For redirection

const RegisterForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // Initialize navigation hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Registration successful!");
      navigate("/home"); // Redirect to home page after successful registration
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="container">
        <div className="form-wrapper">
          <h1 className="title">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Enter email address"
                className="input"
                required
              />
            </div>
            <div className="input-group">
              <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Enter password"
                className="input"
                required
              />
            </div>
            <div>
              <button type="submit" className="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
