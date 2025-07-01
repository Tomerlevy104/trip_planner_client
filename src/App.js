import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PlannerPage from "./pages/PlannerPage";
import HistoryPage from "./pages/HistoryPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TripOptionsPage from "./pages/TripOptionsPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div dir="rtl" style={{ padding: "20px" }} className="App">
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/tripplanner" element={<PlannerPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tripoptions" element={<TripOptionsPage />} />
        <Route path="/tripdetails/:tripId" element={<TripDetailsPage />} />
        <Route path="/home" element={<HomePage />} />

        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
// This is the main App component that sets up the routing for the application.