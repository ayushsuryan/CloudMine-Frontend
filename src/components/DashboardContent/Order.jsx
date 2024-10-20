import React from "react";
import { CardContent, Typography } from "@mui/material";
import "./Order.css"; // Custom CSS for glassy card styles

const Order = () => {
  return (
    <div className="order-container">
      <h2>Get a Rig</h2>
      <div className="scrollable-container">
        <div className="glassy-card">
          <CardContent>
            <img src="../../src/assets/rig1.svg" alt="rig1" width="50%" />
            <Typography variant="h5" component="div" className="card-title">
              RIG UNIXO BRONZE
            </Typography>
            <Typography variant="body2" className="card-content">
              <div>Cost: 1,000 INR</div>
              <div>Daily Return: 20 INR</div>
              <div>Duration: 90 days</div>
            </Typography>
            <button className="login-button" role="button">
              Buy Now
            </button>
          </CardContent>
        </div>
        <div className="glassy-card">
          <CardContent>
            <img src="../../src/assets/rig2.svg" alt="rig1" width="50%" />
            <Typography variant="h5" component="div" className="card-title">
              RIG UNIXO SILVER
            </Typography>
            <Typography variant="body2" className="card-content">
              <div>Cost: 4,000 INR</div>
              <div>Daily Return: 80 INR</div>
              <div>Duration: 90 days</div>
            </Typography>
            <button className="login-button" role="button">
              Buy Now
            </button>
          </CardContent>
        </div>
        <div className="glassy-card">
          <CardContent>
            <img src="../../src/assets/rig3.svg" alt="rig1" width="50%" />
            <Typography variant="h5" component="div" className="card-title">
              RIG UNIXO GOLD
            </Typography>
            <Typography variant="body2" className="card-content">
              <div>Cost: 8,000 INR</div>
              <div>Daily Return: 160 INR</div>
              <div>Duration: 90 days</div>
            </Typography>
            <button className="login-button" role="button">
              Buy Now
            </button>
          </CardContent>
        </div>
        <div className="glassy-card">
          <CardContent>
            <img src="../../src/assets/rig4.svg" alt="rig1" width="50%" />
            <Typography variant="h5" component="div" className="card-title">
              RIG UNIXO PLATINUM
            </Typography>
            <Typography variant="body2" className="card-content">
              <div>Cost: 15,000 INR</div>
              <div>Daily Return: 300 INR</div>
              <div>Duration: 90 days</div>
            </Typography>
            <button className="login-button" role="button">
              Buy Now
            </button>
          </CardContent>
        </div>
        <div className="glassy-card">
          <CardContent>
            <img src="../../src/assets/rig5.svg" alt="rig1" width="50%" />
            <Typography variant="h5" component="div" className="card-title">
              RIG UNIXO DIAMOND
            </Typography>
            <Typography variant="body2" className="card-content">
              <div>Cost: 60,000 INR</div>
              <div>Daily Return: 1,200 INR</div>
              <div>Duration: 90 days</div>
            </Typography>
            <button className="login-button" role="button">
              Buy Now
            </button>
          </CardContent>
        </div>
        <div className="glassy-card">
          <CardContent>
            <img src="../../src/assets/rig6.svg" alt="rig1" width="50%" />
            <Typography variant="h5" component="div" className="card-title">
              RIG UNIXO LEGENDARY
            </Typography>
            <Typography variant="body2" className="card-content">
              <div>Cost: 2,00,000 INR</div>
              <div>Daily Return: 4,000 INR</div>
              <div>Duration: 90 days</div>
            </Typography>
            <button className="login-button" role="button">
              Buy Now
            </button>
          </CardContent>
        </div>
      </div>
    </div>
  );
};

export default Order;
