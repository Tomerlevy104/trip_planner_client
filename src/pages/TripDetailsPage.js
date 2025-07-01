import React from "react";
import { useParams } from "react-router-dom";
import WeatherForecastCard from "../components/WeatherForecastCard";
import "./style/TripDetailsPage.css"; // נכין CSS

function TripDetailsPage() {
  const { tripId } = useParams();

  const dummyTrips = [
    {
      id: "1",
      name: "טיול אופניים בצפון",
      country: "ישראל",
      city: "חיפה",
      distance: "45 ק״מ",
      difficulty: "בינוני",
      type: "טיול אופניים",
      description: "זהו מסלול קסום באזור חיפה, מתאים לכל המשפחה.",
      weather: "24°C",
      days: [
        { day: 1, distance: "10 ק״מ" },
        { day: 2, distance: "12 ק״מ" },
      ],
    },
    // הוספת מסלולים נוספים...
  ];

  const trip = dummyTrips.find((t) => t.id === tripId);

  if (!trip) {
    return (
      <div className="trip-details-container">
        <h2>הטיול לא נמצא</h2>
      </div>
    );
  }

  return (
    <div className="trip-details-container" dir="rtl">
      <h1>{trip.name}</h1>
      <p className="trip-description">{trip.description}</p>

      <div className="trip-info-cards">
        <div className="info-card">
          <strong>סוג טיול: </strong>
          <span>{trip.type}</span>
        </div>
        <div className="info-card">
          <strong>רמת קושי: </strong>
          <span>{trip.difficulty}</span>
        </div>
        <div className="info-card">
          <strong>מרחק כולל: </strong>
          <span>{trip.distance}</span>
        </div>
      </div>

      <h3>פירוט יומי</h3>
      <ul className="trip-days-list">
        {trip.days.map((d) => (
          <li key={d.day}>
            יום {d.day} - {d.distance}
          </li>
        ))}
      </ul>

      <div className="trip-map-placeholder">
        מפה תוצג כאן
        
      </div>
        <br></br>
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
