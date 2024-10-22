import React, { useState, useEffect } from "react";
import { CardContent, Typography } from "@mui/material";
import api from "../../api"; // Import your Axios instance
import "./Deposit.css"; // Custom CSS for glassy card styles

const Deposit = () => {
  const [balance, setBalance] = useState(0); // State to store the wallet balance
  const [loading, setLoading] = useState(true); // Loading state

  // Function to fetch balance from the API
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.get("/users/balance", {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        });
        // Round the balance to 2 decimal places
        const roundedBalance = parseFloat(response.data.balance).toFixed(2);
        // const formattedBalance =
        //   parseFloat(roundedBalance).toLocaleString("en-IN"); // Format with commas for Indian locale
        setBalance(roundedBalance);
      } catch (error) {
        console.error("Failed to fetch balance:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    // Fetch the balance immediately on component mount
    fetchBalance();

    // Set up an interval to fetch the balance every 3 seconds for live updates
    const intervalId = setInterval(fetchBalance, 3000);

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="order-container">
        <h2>Wallet</h2>
        <div className="scrollable-container">
          <div className="glassy-card">
            <CardContent>
              {loading ? (
                <Typography component="div" className="card-title">
                  Loading...
                </Typography>
              ) : (
                <Typography component="div" className="card-title">
                  Balance: {balance}
                </Typography>
              )}

              <button
                style={{ fontSize: "small" }}
                className="login-button"
                role="button"
              >
                Deposit
              </button>
              <button
                style={{ fontSize: "small" }}
                className="login-button"
                role="button"
              >
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
