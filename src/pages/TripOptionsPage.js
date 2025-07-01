import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TripCard from "../components/TripCard";
import "./style/TripOptionsPage.css";

function TripOptionsPage() {
  const navigate = useNavigate();

  // כאן נשתמש ב-state במקום קבוע
  const [trips, setTrips] = useState([
    {
      id: 1,
      name: "טיול אופניים בצפון",
      country: "ישראל",
      city: "חיפה",
      distance: "45 ק״מ",
      difficulty: "בינוני",
      type: "טיול אופניים",
      isFavorite: false,
    },
    {
      id: 2,
      name: "מסלול הליכה בטוקיו",
      country: "יפן",
      city: "טוקיו",
      distance: "12 ק״מ",
      difficulty: "קל",
      type: "טיול רגלי",
      isFavorite: true,
    },
    {
      id: "3",
      name: "מסלול רכיבה באופניים, נתניה",
      country: "ישראל",
      city: "נתניה",
      distance: "19 ק״מ",
      difficulty: "בינוני",
      type: "טיול אופניים",
      imageUrl: "/images/default_trip.png",
      isFavorite: false,

    },
  ]);

  const handleCardClick = (tripId) => {
    navigate(`/tripdetails/${tripId}`);
  };

  // פונקציה להפיכת מועדף
  const handleToggleFavorite = (tripId) => {
    setTrips((prevTrips) =>
      prevTrips.map((trip) =>
        trip.id === tripId
          ? { ...trip, isFavorite: !trip.isFavorite }
          : trip
      )
    );
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
            isFavorite={trip.isFavorite}
            onFavoriteToggle={() => handleToggleFavorite(trip.id)}
            onClick={() => handleCardClick(trip.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TripOptionsPage;
