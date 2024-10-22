import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdfScannerIcon from "@mui/icons-material/AdfScanner";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import GroupIcon from "@mui/icons-material/Group";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MenuIcon from "@mui/icons-material/Menu";
import "./Dashboard.css"; // Import your CSS for styling

const Dashboard = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false); // State for icon-only or expanded sidebar
  const [sidebarHeight, setSidebarHeight] = useState(window.innerHeight); // State to hold dynamic height

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  // Update sidebar height when window is resized
  useEffect(() => {
    const handleResize = () => {
      setSidebarHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div
        className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}
        style={{ height: `${sidebarHeight}px` }} // Dynamic height
      >
        {/* Hamburger Menu on top of sidebar */}
        <div className="sidebar-options">
          <div className="hamburger" onClick={toggleSidebar}>
            <MenuIcon />
          </div>
          <div
            className="sidebar-option"
            onClick={() => navigate("/dashboard/order")}
          >
            <ShoppingCartIcon className="icon" />
            {isExpanded && <span>Rigs</span>}
          </div>
          <div
            className="sidebar-option"
            onClick={() => navigate("/dashboard/rigs")}
          >
            <AdfScannerIcon className="icon" />
            {isExpanded && <span>Mine</span>}
          </div>
          <div
            className="sidebar-option"
            onClick={() => navigate("/dashboard/deposit")}
          >
            <AccountBalanceWalletIcon className="icon" />
            {isExpanded && <span>Deposit</span>}
          </div>
          <div
            className="sidebar-option"
            onClick={() => navigate("/dashboard/team")}
          >
            <GroupIcon className="icon" />
            {isExpanded && <span>Team</span>}
          </div>
          {/* <div
            className="sidebar-option"
            onClick={() => navigate("/dashboard/support")}
          >
            <SupportAgentIcon className="icon" />
            {isExpanded && <span>Support</span>}
          </div> */}
        </div>

        {/* Settings Option at the Bottom */}
        <div
          className="sidebar-settings"
          onClick={() => navigate("/dashboard/profile")}
        >
          <AccountCircleIcon className="icon" />
          {isExpanded && <span>Profile</span>}
        </div>
      </div>

      {/* Content Area */}
      <div className="content-area">
        <Outlet /> {/* This is where the nested routes will render */}
      </div>
    </div>
  );
};

export default Dashboard;
