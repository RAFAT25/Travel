
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Trips from "./pages/Trips";
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";
import Payments from "./pages/Payments";
import Tickets from "./pages/Tickets";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/users" element={<Users />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Router>
);
