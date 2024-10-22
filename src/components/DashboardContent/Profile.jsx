import React, { useEffect, useState } from "react";
import { CardContent, Typography } from "@mui/material";
import "./Profile.css"; // Custom CSS for glassy card styles
import api from "../../api"; // Import your Axios instance
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [users, setUser] = useState([{ name: "Ayush", balance: 10000 }]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
    navigate("/login"); // Redirect the user to the login page (adjust this path as needed)
  };

  return (
    <div>
      <div className="order-container">
        <h2>Profile</h2>
        <div className="scrollable-container">
          {users.length > 0 ? (
            users.map((user) => (
              <div
                className="glassy-card"
                style={{ marginBottom: "0px" }}
                key={user._id}
              >
                <CardContent
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <LogoutIcon onClick={handleLogout} className="icon" />

                  <Typography
                    variant="p"
                    component="div"
                    className="card-title"
                  >
                    {user.name}
                  </Typography>
                  <Typography variant="body2" component="div">
                    Balance: {user.balance.toFixed(2)} INR
                  </Typography>
                </CardContent>
              </div>
            ))
          ) : (
            <Typography variant="body2" component="div">
              No referred users found.
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
