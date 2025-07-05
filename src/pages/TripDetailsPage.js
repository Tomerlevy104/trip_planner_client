import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import WeatherForecastCard from "../components/WeatherForecastCard";
import "./style/TripDetailsPage.css";

function TripDetailsPage() {
  const { tripId } = useParams();
  const location = useLocation();

  const [trip, setTrip] = useState(location.state || null);
  const [loading, setLoading] = useState(!location.state);
  const [error, setError] = useState("");

  useEffect(() => {
    if (trip) return;

    const fetchTrip = async () => {
      try {
        const response = await axios.get(`/api/trips/${tripId}`);
        setTrip(response.data.data);
      } catch (err) {
        console.error("Error fetching trip:", err);
        setError("שגיאה בטעינת הנתונים");
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [trip, tripId]);

  if (loading) {
    return <div className="trip-details-container">טוען נתונים...</div>;
  }

  if (error) {
    return <div className="trip-details-container">{error}</div>;
  }

  if (!trip) {
    return <div className="trip-details-container">הטיול לא נמצא.</div>;
  }

  return (
    <div className="trip-details-container" dir="rtl">
      <h1>{trip.tripName || trip.name}</h1>
      <p className="trip-description">{trip.tripDescription || "אין תיאור זמין."}</p>
      <div className="trip-info-cards">
        <div className="info-card">
          <strong>סוג טיול:</strong>{" "}
          {trip.tripType === "bicycle" ? "טיול אופניים" : "טיול רגלי"}
        </div>
        <div className="info-card">
          <strong>רמת קושי:</strong>{" "}
          {trip.difficulty || "לא צוינה"}
        </div>
        <div className="info-card">
          <strong>מרחק כולל:</strong>{" "}
          {trip.totalDistance ? `${trip.totalDistance} ק״מ` : "לא ידוע"}
        </div>
      </div>

      <h3>פירוט יומי</h3>
      <ul className="trip-days-list">
        {(trip.dailyBreakdown || []).map((d) => (
          <li key={d.day}>
            יום {d.day} - {d.distance} ק״מ {d.description && ` - ${d.description}`}
          </li>
        ))}
      </ul>

      <div className="trip-map-placeholder">
        מפה תוצג כאן
      </div>
      <br />

      {/* תחזית מזג אוויר - אפשר בעתיד להחליף לנתונים אמיתיים */}
      <WeatherForecastCard
        currentTemp="24°C"
        currentDescription="Sunny"
        upcomingDays={[
          { date: "2025-07-01", min: "22°", max: "26°", description: "Sunny" },
          { date: "2025-07-02", min: "23°", max: "27°", description: "Sunny" },
          { date: "2025-07-03", min: "21°", max: "25°", description: "Sunny" }
        ]}
      />
    </div>
  );
}

export default TripDetailsPage;
