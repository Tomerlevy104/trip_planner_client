import React from "react";
import { useNavigate } from "react-router-dom";
import "./TripOptionsPage.css"; // נשמור מקום לסטיילינג
import TripCard from "../components/TripCard";

function TripOptionsPage() {
  const navigate = useNavigate();

  // כאן נשתמש בנתונים דמיוניים. בהמשך נמלא אותם בפרטי אמת שנגיע אליהם מהתכנון.
  const trips = [
    {
      id: 1,
      name: "טיול אופניים בצפון",
      country: "ישראל",
      city: "חיפה",
      distance: "45 ק״מ",
      difficulty: "בינוני",
      type: "טיול אופניים",
    },
    {
      id: 2,
      name: "מסלול הליכה בטוקיו",
      country: "יפן",
      city: "טוקיו",
      distance: "12 ק״מ",
      difficulty: "קל",
      type: "טיול רגלי",
    },
    // אפשר להוסיף עוד הצעות...
  ];

  const handleCardClick = (tripId) => {
    navigate(`/tripdetails/${tripId}`);
  };

  return (
    <div dir="rtl" className="trip-options-container">
      <h1>הצעות למסלולים</h1>
      <div className="trip-list">
        {trips.map((trip) => (
          <TripCard
            key={trip.id}
            tripName={trip.name}
            country={trip.country}
            city={trip.city}
            tripType={trip.type}
            difficulty={trip.difficulty}
            distance={trip.distance}
            onClick={() => handleCardClick(trip.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TripOptionsPage;
