import React, { useState } from "react";
import { CardContent, Typography } from "@mui/material";
import "./Deposit.css"; // Custom CSS for glassy card styles
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Team = () => {
  // Function to simulate mining start

  return (
    <div>
      <div className="order-container">
        <h2>Team</h2>
        <div className="scrollable-container">
          <div className="glassy-card">
            <CardContent
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <AccountCircleIcon className="icon" />
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

export default Team;
