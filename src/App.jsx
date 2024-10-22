import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Order from "./components/DashboardContent/Order";
import Rigs from "./components/DashboardContent/Rigs";
import Deposit from "./components/DashboardContent/Deposit";
import Team from "./components/DashboardContent/Team";
import Support from "./components/DashboardContent/Support";
import Profile from "./components/DashboardContent/Profile";

import { ThemeProvider, createTheme } from "@mui/material/styles";

// Create a theme instance (customize as needed)
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196F3",
    },
    secondary: {
      main: "#21CBF3",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            {/* Redirect from /dashboard to /dashboard/order */}
            <Route path="" element={<Navigate to="order" replace />} />
            {/* Nested Routes for Dashboard */}
            <Route path="order" element={<Order />} />
            <Route path="rigs" element={<Rigs />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="team" element={<Team />} />
            <Route path="support" element={<Support />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Catch-All Route */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
