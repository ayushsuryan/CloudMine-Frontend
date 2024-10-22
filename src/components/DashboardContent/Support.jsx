import React from "react";
import "./Support.css"; // Custom CSS for glassy card styles
import { CardContent, Typography } from "@mui/material";
const Support = () => {
  return (
    <div>
      <div className="order-container">
        <h2>Support</h2>
        <div className="scrollable-container">
          <div className="glassy-card">
            <CardContent
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Typography variant="p" component="div" className="card-title">
                ASDASD123213MK12J3K123
              </Typography>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
