import React from "react";
import { CardContent, Typography } from "@mui/material";
import "./Profile.css"; // Custom CSS for glassy card styles
import LogoutIcon from "@mui/icons-material/Logout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent"; // Import the support icon
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
    navigate("/login"); // Redirect the user to the login page (adjust this path as needed)
  };

  const handleSupportClick = () => {
    window.open("https://t.me/etherial_in", "_blank"); // Replace with your Telegram channel link
  };

  return (
    <div>
      <div className="order-container">
        <h2>Profile</h2>
        <div className="scrollable-container">
          {/* Support Card */}
          <div
            onClick={handleSupportClick}
            className="glassy-card"
            style={{ marginBottom: "0px", cursor: "pointer" }} // Add cursor pointer for better UX
          >
            <CardContent
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <SupportAgentIcon className="icon" />
              <Typography
                variant="body1"
                component="div"
                className="card-title"
              >
                Support
              </Typography>
            </CardContent>
          </div>

          {/* Logout Card */}
          <div
            onClick={handleLogout}
            className="glassy-card"
            style={{ marginBottom: "0px", cursor: "pointer" }} // Add cursor pointer for better UX
          >
            <CardContent
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <LogoutIcon className="icon" />
              <Typography
                variant="body1"
                component="div"
                className="card-title"
              >
                Logout
              </Typography>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
