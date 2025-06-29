// src/pages/TripDetailsPage.js
import React from "react";
import { useParams } from "react-router-dom";

function TripDetailsPage() {
  const { tripId } = useParams();

  // ⚠️ כרגע נשתמש בדאטה דמה, בהמשך נחבר לדאטה אמיתי
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
    },
    {
      id: "2",
      name: "מסלול הליכה בטוקיו",
      country: "יפן",
      city: "טוקיו",
      distance: "12 ק״מ",
      difficulty: "קל",
      type: "טיול רגלי",
      description: "מסלול הליכה עירוני בנופים מרהיבים של טוקיו.",
    },
  ];

  const trip = dummyTrips.find((t) => t.id === tripId);

  if (!trip) {
    return (
      <div dir="rtl" style={{ padding: "20px" }}>
        <h2>הטיול לא נמצא</h2>
      </div>
    );
  }

  return (
    <div dir="rtl" style={{ padding: "20px" }}>
      <h1>{trip.name}</h1>
      <p><strong>יעד:</strong> {trip.country}, {trip.city}</p>
      <p><strong>סוג טיול:</strong> {trip.type}</p>
      <p><strong>רמת קושי:</strong> {trip.difficulty}</p>
      <p><strong>מרחק כולל:</strong> {trip.distance}</p>
      <p><strong>תיאור:</strong> {trip.description}</p>

      {/* כאן בעתיד נוסיף את המפה */}
      <div style={{ marginTop: "20px", height: "200px", background: "#eee", textAlign: "center", lineHeight: "200px" }}>
        מפה תוצג כאן
      </div>
    </div>
  );
}

export default TripDetailsPage;
