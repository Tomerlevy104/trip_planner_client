// src/components/SavedTripsList.js
import React from "react";
import TripCard from "./TripCard";

function SavedTripsList({ trips, onDelete, onClick, limit }) {
  const tripsToShow = limit ? trips.slice(0, limit) : trips;

  if (tripsToShow.length === 0) {
    return <p>לא נמצאו מסלולים.</p>;
  }

  return (
    <div className="saved-trips-section">
      {tripsToShow.map((trip) => (
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
          onFavoriteToggle={() => onDelete && onDelete(trip.id)}
          onClick={() => onClick && onClick(trip.id)}
        />
      ))}
    </div>
  );
}

export default SavedTripsList;
