import React, { useEffect, useState } from "react";
import { CardContent, Typography } from "@mui/material";
import "./Team.css"; // Custom CSS for glassy card styles
import api from "../../api"; // Import your Axios instance
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Team = () => {
  const [referredUsers, setReferredUsers] = useState([]);

  useEffect(() => {
    const fetchReferals = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.get("/users/referred-users", {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        });
        setReferredUsers(response.data.referredUsers); // Set the referred users data to state
      } catch (error) {
        console.error("Failed to fetch referred users:", error);
      }
    };

    // Fetch the referred users immediately on component mount
    fetchReferals();

    // Set up an interval to fetch the referred users every 30 seconds for live updates
    const intervalId = setInterval(fetchReferals, 30000);

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="order-container">
        <h2>Team</h2>
        <div className="scrollable-container">
          {referredUsers.length > 0 ? (
            referredUsers.map((user) => (
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
                  <AccountCircleIcon className="icon" />
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

export default Team;
