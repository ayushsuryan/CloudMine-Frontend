import React, { useState } from "react";
import {
  CardContent,
  Typography,
  Modal,
  CircularProgress,
} from "@mui/material";
import "./Order.css"; // Custom CSS for glassy card styles

const Rigs = () => {
  const [loading, setLoading] = useState(false); // Loader state
  const [balanceVisible, setBalanceVisible] = useState(false); // Balance visibility state
  const [balance, setBalance] = useState(5000); // Example balance state (fetch this from API if needed)

  // Function to simulate mining start
  const handleStartMining = () => {
    setLoading(true); // Show loader

    // Simulate mining process (API call)
    setTimeout(() => {
      setLoading(false); // Hide loader
      setBalanceVisible(true); // Show balance after mining starts
    }, 3000); // Simulate 3 seconds delay for loading
  };

  return (
    <div>
      <div className="order-container">
        <h2>Start Mining</h2>
        <div className="scrollable-container">
          <div className="glassy-card">
            <CardContent>
              <img src="../../src/assets/rig1.svg" alt="rig1" width="50%" />
              <Typography variant="h6" component="div" className="card-title">
                RIG UNIXO BRONZE
              </Typography>
              <Typography variant="body2" className="card-content">
                <div>Cost: 1,000 INR</div>
                <div>Daily Return: 20 INR</div>
                <div>Duration: 90 days</div>
              </Typography>
              <br />
              {balanceVisible && (
                <div open={loading} onClose={() => setLoading(false)}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    className="div-content"
                  >
                    <CircularProgress className="white-loader" />
                    <span className="loader-text">Mining in progress...</span>
                  </div>
                </div>
              )}
              <button
                className="login-button"
                role="button"
                onClick={handleStartMining}
              >
                Start Mining
              </button>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rigs;
