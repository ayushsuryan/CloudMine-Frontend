import React, { useState } from "react";
import "./LoginPage.css"; // Import the CSS file
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure to import axios if you're using it

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    console.log(form);
    e.preventDefault();
    try {
      // Use the base URL from environment variables
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/users/login`,
        form
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response.data.msg || "Login failed");
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="language-section" aria-label="English (UK)">
          <span>English (UK)</span>
        </div>
        <div className="logo-section">
          <img src="../src/assets/logo.png" alt="Facebook from Meta" />
        </div>
        <div className="login-form">
          <span style={{ color: "red" }}>{error}</span>
          <div className="input-field">
            <input
              type="email"
              id="m_login_email"
              placeholder="Email"
              aria-label="Email"
              autoComplete="on"
              value={form.email} // Bind the value to the state
              onChange={(e) => {
                setForm({
                  ...form,
                  email: e.target.value, // Corrected to "email"
                });
              }}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              id="m_login_password"
              placeholder="Password"
              aria-label="Password"
              autoComplete="on"
              value={form.password} // Bind the value to the state
              onChange={(e) => {
                setForm({
                  ...form,
                  password: e.target.value, // Corrected to "password"
                });
              }}
            />
          </div>
          <button className="login-button" role="button" onClick={handleSubmit}>
            Log in
          </button>
          <br />
          <span className="language-section">
            Don't have an account?
            <span
              style={{ marginLeft: "5px" }}
              onClick={() => navigate("/signup")}
              underline="hover"
            >
              Signup here
            </span>
          </span>
        </div>
        <span className="language-section">Copyright &copy; 2024</span>
      </div>
    </div>
  );
}

export default Login;
