// src/pages/HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  if(!username) {
    // If no username is found, redirect to login page
    navigate("/login");
    return null; // Prevent rendering the rest of the component
  }
  function handleLogout() {
    localStorage.clear();
    navigate("/landing");
  }

  return (
    <div dir="rtl" className="home-page">
      <h1>ברוך הבא {username ? `, ${username}` : ""}!</h1>
      <p>בחר פעולה שברצונך לבצע:</p>
      <div className="home-actions">
        <button
          className="home-btn primary"
          onClick={() => navigate("/tripplanner")}
        >
          תכנון טיול חדש
        </button>
        <button
          className="home-btn secondary"
          onClick={() => navigate("/history")}
        >
          צפייה במסלולים שמורים
        </button>
        <button
          className="home-btn logout"
          onClick={handleLogout}
        >
          התנתקות
        </button>
      </div>
    </div>
  );
}

export default HomePage;
