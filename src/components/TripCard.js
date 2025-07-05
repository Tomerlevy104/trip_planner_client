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
  className = ""  

}) {
  const defaultImageUrl = "/images/default_trip.png";

  return (
<div className={`trip-card ${className}`} onClick={onClick}>

  {/* תמונה בחלק העליון */}
  <img
    src={imageUrl || defaultImageUrl}
    alt={` ${city || country}`}
    className="trip-card-image"
  />

  {/* בר פעולות מתחת לתמונה */}
  <div className="trip-card-bar">
    <div
      className={`favorite-icon ${isFavorite ? "favorited" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        onFavoriteToggle && onFavoriteToggle();
      }}
      title={isFavorite ? "הסר ממועדפים" : "הוסף למועדפים"}
    >
      {isFavorite ? "❤️" : "🤍"}
    </div>
  </div>

  {/* תוכן הכרטיס */}
  <div className="trip-card-content">
    <h3>{tripName}</h3>
    <div><strong>יעד:</strong> {country}, {city}</div>
    <div><strong>רמת קושי:</strong> {difficulty || "לא נבחר"}</div>
    <div><strong>סוג טיול:</strong> {tripType}</div>
    <div><strong>מרחק כולל:</strong> {distance}</div>
  </div>
</div>
  );
}

export default TripCard;
