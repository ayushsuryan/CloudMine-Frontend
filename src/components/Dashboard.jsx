import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdfScannerIcon from "@mui/icons-material/AdfScanner";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import GroupIcon from "@mui/icons-material/Group";
import MenuIcon from "@mui/icons-material/Menu";
import "./Dashboard.css"; // Import your CSS for styling

const Dashboard = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false); // State for icon-only or expanded sidebar

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOptionClick = (path) => {
    setIsExpanded(false); // Collapse sidebar

    navigate(path); // Navigate to the selected route
  };

  return (
    <div style={{ height: window.innerHeight }} className="dashboard-container">
      {/* Sidebar */}
      <div
        className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}
        style={{ height: `${window.innerHeight}px` }} // Dynamic height
      >
        {/* Hamburger Menu on top of sidebar */}
        <div className="sidebar-options">
          <div className="hamburger" onClick={toggleSidebar}>
            <MenuIcon />
          </div>
          <div
            className="sidebar-option"
            onClick={() => handleOptionClick("/dashboard/order")}
          >
            <ShoppingCartIcon className="icon" />
            {isExpanded && <span>Rigs</span>}
          </div>
          <div
            className="sidebar-option"
            onClick={() => handleOptionClick("/dashboard/rigs")}
          >
            <AdfScannerIcon className="icon" />
            {isExpanded && <span>Mine</span>}
          </div>
          <div
            className="sidebar-option"
            onClick={() => handleOptionClick("/dashboard/deposit")}
          >
            <AccountBalanceWalletIcon className="icon" />
            {isExpanded && <span>Deposit</span>}
          </div>
          <div
            className="sidebar-option"
            onClick={() => handleOptionClick("/dashboard/team")}
          >
            <GroupIcon className="icon" />
            {isExpanded && <span>Team</span>}
          </div>
        </div>

        {/* Settings Option at the Bottom */}
        <div
          className="sidebar-settings"
          onClick={() => handleOptionClick("/dashboard/profile")}
        >
          <AccountCircleIcon className="icon" />
          {isExpanded && <span>Profile</span>}
        </div>
      </div>

      {/* Content Area */}
      <div className={`content-area`}>
        <Outlet /> {/* This is where the nested routes will render */}
      </div>
    </div>
  );
};

export default Dashboard;
