import React, { useState } from "react";
import { CardContent, Typography, Snackbar, Alert } from "@mui/material";
import api from "../../api"; // Import your Axios instance
import "./Order.css"; // Custom CSS for glassy card styles

const rigs = [
  {
    id: 1,
    rigType: "rig_1000",
    title: "RIG UNIXO BRONZE",
    price: 1000,
    dailyReturn: 20,
    duration: 90,
    img: "rig_1000.svg",
  },
  {
    id: 2,
    rigType: "rig_4000",
    title: "RIG UNIXO SILVER",
    price: 4000,
    dailyReturn: 80,
    duration: 90,
    img: "rig_4000.svg",
  },
  {
    id: 3,
    rigType: "rig_8000",
    title: "RIG UNIXO GOLD",
    price: 8000,
    dailyReturn: 160,
    duration: 90,
    img: "rig_8000.svg",
  },
  {
    id: 4,
    rigType: "rig_15000",
    title: "RIG UNIXO PLATINUM",
    price: 15000,
    dailyReturn: 300,
    duration: 90,
    img: "rig_15000.svg",
  },
  {
    id: 5,
    rigType: "rig_60000",
    title: "RIG UNIXO DIAMOND",
    price: 60000,
    dailyReturn: 1200,
    duration: 90,
    img: "rig_60000.svg",
  },
  {
    id: 6,
    rigType: "rig_200000",
    title: "RIG UNIXO LEGENDARY",
    price: 200000,
    dailyReturn: 4000,
    duration: 90,
    img: "rig_200000.svg",
  },
];

const Order = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State to control snackbar visibility
  const [snackbarMessage, setSnackbarMessage] = useState(""); // State to store the snackbar message
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // State to store the snackbar severity

  // Function to handle Buy Now button click
  const handleBuyNow = async (rig) => {
    try {
      // Get the token from local storage
      const token = localStorage.getItem("token");

      const response = await api.post(
        "/users/order-rig",
        {
          rigType: rig.rigType,
          price: rig.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        }
      );

      // Show success snackbar message
      setSnackbarMessage("Purchase successful!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      console.log("Purchase successful:", response.data);
    } catch (error) {
      // Show error snackbar message
      setSnackbarMessage("Purchase failed. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      console.error("Purchase failed:", error);
    }
  };

  // Function to close the snackbar
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="order-container">
      <h2>Get a Rig</h2>
      <div className="scrollable-container">
        {rigs.map((rig) => (
          <div className="glassy-card" key={rig.id}>
            <CardContent>
              <img
                src={`../../src/assets/${rig.img}`}
                alt={rig.title}
                width="50%"
              />
              <Typography variant="h6" component="div" className="card-title">
                {rig.title}
              </Typography>
              <Typography variant="body2" className="card-content">
                <div>Cost: {rig.price} INR</div>
                <div>Daily Return: {rig.dailyReturn} INR</div>
                <div>Duration: {rig.duration} days</div>
              </Typography>
              <button
                className="login-button"
                role="button"
                onClick={() => handleBuyNow(rig)}
              >
                Buy Now
              </button>
            </CardContent>
          </div>
        ))}
      </div>

      {/* Snackbar for feedback messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Order;
