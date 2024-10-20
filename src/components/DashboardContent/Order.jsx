import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./Order.css"; // Custom CSS for glassy card styles

const Order = () => {
  return (
    <div className="order-container">
      <h2>Orders Page</h2>
      <div className="glassy-card">
        <CardContent>
          <Typography variant="h5" component="div" className="card-title">
            Your Orders
          </Typography>
          <Typography variant="body2" className="card-content">
            Here you can view and manage all your orders.
          </Typography>
        </CardContent>
      </div>
      <div className="glassy-card">
        <CardContent>
          <Typography variant="h5" component="div" className="card-title">
            Your Orders
          </Typography>
          <Typography variant="body2" className="card-content">
            Here you can view and manage all your orders.
          </Typography>
        </CardContent>
      </div>
      <div className="glassy-card">
        <CardContent>
          <Typography variant="h5" component="div" className="card-title">
            Your Orders
          </Typography>
          <Typography variant="body2" className="card-content">
            Here you can view and manage all your orders.
          </Typography>
        </CardContent>
      </div>
      <div className="glassy-card">
        <CardContent>
          <Typography variant="h5" component="div" className="card-title">
            Your Orders
          </Typography>
          <Typography variant="body2" className="card-content">
            Here you can view and manage all your orders.
          </Typography>
        </CardContent>
      </div>
    </div>
  );
};

export default Order;
