import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PlannerPage from './pages/PlannerPage';
import HistoryPage from './pages/HistoryPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TripOptionsPage from './pages/TripOptionsPage';
import TripDetailsPage from './pages/TripDetailsPage';

function App() {
  return (
    <div dir="rtl" style={{ padding: '20px' }} className="App" >
      <nav>
        <ul>
          <li><Link to="/tripplanner">תכנון מסלול</Link></li>
          <li><Link to="/history">היסטוריית מסלולים</Link></li>
          <li><Link to="/login">התחברות</Link></li>
          <li><Link to="/register">הרשמה</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/tripplanner" element={<PlannerPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tripoptions" element={<TripOptionsPage />} />
        <Route path="/tripdetails/:tripId" element={<TripDetailsPage />} />
        {/* Add more routes as needed */}

      </Routes>
    </div>
  );
}

export default App;
// This is the main App component that sets up the routing for the application.
// It includes a navigation bar with links to the Planner, History, and Login pages.
// The <Routes> component defines the different routes in the application, mapping each path to its corresponding component.
// The PlannerPage, HistoryPage, and LoginPage components are imported from their respective files
// and rendered when the user navigates to the corresponding path.
// The navigation links use the <Link> component from 'react-router-dom' to enable client-side routing,
// allowing the application to change views without reloading the page.