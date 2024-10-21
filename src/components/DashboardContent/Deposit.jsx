import React, { useState } from "react";
import { CardContent, Typography } from "@mui/material";
import "./Deposit.css"; // Custom CSS for glassy card styles

const Deposit = () => {
  // Function to simulate mining start

  return (
    <div>
      <div className="order-container">
        <h2>Wallet</h2>
        <div className="scrollable-container">
          <div className="glassy-card">
            <CardContent>
              <Typography variant="h6" component="div" className="card-title">
                Balance: 5000 INR
              </Typography>

              <button className="login-button" role="button">
                Deposit
              </button>
              <button className="login-button" role="button">
                Withdraw
              </button>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
