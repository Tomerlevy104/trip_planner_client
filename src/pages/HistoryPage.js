import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TripCard from "../components/TripCard";
import "./style/TripOptionsPage.css";

function HistoryPage() {
  const navigate = useNavigate();

  // גם כאן נשתמש בנתוני דמה
  const [trips, setTrips] = useState([
    {
      id: 1,
      name: "טיול אופניים בצפון",
      country: "ישראל",
      city: "חיפה",
      distance: "45 ק״מ",
      difficulty: "בינוני",
      type: "טיול אופניים",
      imageUrl: "/images/emek.jpg",
      isFavorite: true,
    },
    {
      id: 2,
      name: "מסלול הליכה בטוקיו",
      country: "יפן",
      city: "טוקיו",
      distance: "12 ק״מ",
      difficulty: "קל",
      type: "טיול רגלי",
      imageUrl: "/images/tokyo.jpg",
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

  const handleToggleFavorite = (tripId) => {
    setTrips((prevTrips) =>
      prevTrips.map((trip) =>
        trip.id === tripId
          ? { ...trip, isFavorite: !trip.isFavorite }
          : trip
      )
    );
  };

  // סינון רק המסלולים השמורים
  const favoriteTrips = trips.filter((trip) => trip.isFavorite);

  return (
    <div dir="rtl" className="trip-options-container">
      <h1>המסלולים השמורים שלי</h1>
      {favoriteTrips.length === 0 ? (
        <p>אין מסלולים שמורים כרגע.</p>
      ) : (
        <div className="trip-list">
          {favoriteTrips.map((trip) => (
            <TripCard
              key={trip.id}
              tripName={trip.name}
              country={trip.country}
              city={trip.city}
              tripType={trip.type}
              difficulty={trip.difficulty}
              distance={trip.distance}
              imageUrl={trip.imageUrl}
              isFavorite={trip.isFavorite}
              onFavoriteToggle={() => handleToggleFavorite(trip.id)}
              onClick={() => handleCardClick(trip.id)}
            />
          ))}
        </div>

      )}
    </div>
  );
}

export default HistoryPage;
