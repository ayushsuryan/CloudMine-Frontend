import React, { useState, useEffect } from "react";
import { CardContent, Typography, CircularProgress } from "@mui/material";
import api from "../../api"; // Import your Axios instance
import "./Rigs.css"; // Custom CSS for glassy card styles

const Rigs = () => {
  const [rigData, setRigData] = useState([]); // State to store fetched rig data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [refresh, setRefresh] = useState(false); // State to trigger refresh
  const [isMining, setIsMining] = useState(false); // State to track mining action status

  // Fetch rig data on component mount
  useEffect(() => {
    const fetchRigData = async () => {
      setLoading(true); // Show loading spinner before data fetch
      try {
        const token = localStorage.getItem("token");
        const response = await api.get("/users/available-rigs", {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        });
        setRigData(response.data); // Assuming the response is an array of rigs
        setLoading(false); // Hide loading spinner after data fetch
      } catch (error) {
        console.error("Failed to fetch rig data:", error);
        setLoading(false); // Hide loading spinner on error
      }
    };

    fetchRigData();
  }, [refresh]); // Refresh when state changes

  // Function to start mining
  const handleStartMining = async (rig) => {
    console.log(rig);
    setIsMining(true); // Disable button while request is being processed
    try {
      const token = localStorage.getItem("token");

      // Send the request with the rigId in the body and token in the headers
      const response = await api.post(
        "/users/start-mining",
        { rigId: rig._id }, // Pass rigId in the body
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        }
      );
      setRefresh(!refresh); // Toggle refresh to re-fetch data
      console.log("Mining started:", response.data);
    } catch (error) {
      console.error("Failed to start mining:", error);
    }
    setIsMining(false); // Re-enable button after request is fulfilled
  };

  return (
    <div>
      <div className="order-container">
        <h2>Start Mining</h2>
        <div className="scrollable-container">
          {loading ? ( // Display loading spinner while data is being fetched
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <CircularProgress sx={{ color: "white" }} />

              <Typography
                style={{ marginTop: "15px" }}
                variant="body2"
                className="loader-text"
              >
                Loading rigs...
              </Typography>
            </div>
          ) : rigData.length > 0 ? (
            rigData.map((rig) => (
              <div key={rig._id} className="glassy-card">
                <CardContent>
                  <img
                    src={`../../src/assets/${rig.rigType}.svg`}
                    alt={rig.rigType}
                    width="50%"
                  />
                  <Typography
                    variant="h6"
                    component="div"
                    className="card-title"
                  >
                    {rig.rigType}
                  </Typography>
                  <Typography variant="body2" className="card-content">
                    <div>Cost: {rig.price} INR</div>
                    <div>Daily Return: {rig.dailyReturn} INR</div>
                    <div>Duration: {rig.miningDays} days</div>
                  </Typography>
                  <br />
                  {rig.status === "active" ? (
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
                      <CircularProgress sx={{ color: "white" }} /> <br />
                      <span className="loader-text">Mining in progress...</span>
                    </div>
                  ) : (
                    <button
                      className="login-button"
                      role="button"
                      onClick={() => handleStartMining(rig)} // Pass the rig to the handler
                      disabled={isMining} // Disable button while mining action is in progress
                    >
                      {isMining ? "Starting Mining..." : "Start Mining"}
                    </button>
                  )}
                </CardContent>
              </div>
            ))
          ) : (
            <Typography variant="body2">No rigs available.</Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rigs;
