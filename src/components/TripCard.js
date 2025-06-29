import React from "react";

function TripCard({
  tripName,
  country,
  city,
  tripType,
  difficulty,
  distance = "טרם חושב",
  onClick,
}) {
  return (
    <div
      className="trip-card"
      onClick={onClick}
    >
      <h3 className="trip-card-title">{tripName}</h3>
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
  );
}

export default TripCard;
