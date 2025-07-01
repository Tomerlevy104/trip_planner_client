import React from "react";
import "./style/TripCard.css";

function TripCard({
  tripName,
  country,
  city,
  tripType,
  difficulty,
  distance = "טרם חושב",
  imageUrl,
  isFavorite = false,
  onFavoriteToggle,
  onClick,
}) {
  const defaultImageUrl = "/images/default_trip.png";

  return (
    <div className="trip-card" onClick={onClick}>
      {/* לב מועדפים */}
      <div
        className="favorite-icon"
        onClick={(e) => {
          e.stopPropagation(); // למנוע לחיצה על הכרטיס
          onFavoriteToggle && onFavoriteToggle();
        }}
        title={isFavorite ? "הסר ממועדפים" : "הוסף למועדפים"}
      >
        {isFavorite ? "❤️" : "🤍"}
      </div>

      {/* תמונה */}
      <img
        src={imageUrl || defaultImageUrl}
        alt={` ${city || country}`}
        className="trip-card-image"
      />

      {/* תוכן */}
      <div className="trip-card-content">
        <h3>{tripName}</h3>
        <p>
          <strong>יעד:</strong> {country}, {city}
        </p>
        <p>
          <strong>רמת קושי:</strong> {difficulty || "לא נבחר"}
        </p>
        <p>
          <strong>סוג טיול:</strong> {tripType}
        </p>
        <p>
          <strong>מרחק כולל:</strong> {distance}
        </p>
      </div>
    </div>
  );
}

export default TripCard;
