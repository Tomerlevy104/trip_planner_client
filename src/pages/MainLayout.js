// src/components/MainLayout.js
import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { Home, Map, Bookmark, Logout } from "@mui/icons-material";
import "./style/MainLayout.css";

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  function handleLogout() {
    localStorage.clear();
    navigate("/landing");
  }

  return (
    <div className="main-layout" dir="rtl">
      <nav className="main-nav">
        {/* Logo */}
        <div className="nav-logo">
          <img src="/images/web_logo.png" alt="לוגו האתר" />
        </div>

        {/* Buttons */}

        <div className="nav-items">
          {/* Home page Button */}
          <button
            onClick={() => navigate("/home")}
            title="דף הבית"
            className={isActive("/home") ? "active" : ""}
          >
            <Home fontSize="large" />
            <span>דף הבית</span>
          </button>

          {/* Trip planner page Button */}
          <button
            onClick={() => navigate("/tripplanner")}
            title="תכנון טיול"
            className={isActive("/tripplanner") ? "active" : ""}
          >
            <Map fontSize="large" />
            <span>תכנון טיול</span>
          </button>

          {/* History page Button */}
          <button
            onClick={() => navigate("/history")}
            title="מסלולים שמורים"
            className={isActive("/history") ? "active" : ""}
          >
            <Bookmark fontSize="large" />
            <span>טיולים שמורים</span>
          </button>
        </div>

        {/* Logout Button */}
        <div className="nav-logout">
          <button onClick={handleLogout} title="התנתקות">
            <Logout fontSize="large" />
            <span>התנתקות</span>
          </button>
        </div>
      </nav>

      <div className="main-content">
        <Outlet /> {/* This is where the page will be rendered */}
      </div>
    </div>
  );
}

export default MainLayout;
