import React, { useState } from "react";
// import FormRadioGroup from "../components/FormRadioGroup";
// import FormCheckboxGroup from "../components/FormCheckboxGroup";
import FormStringInput from "../components/FormStringInput";
import FormDDLInput from "../components/FormDDLInput";
import "./style/PlannerPage.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function PlannerPage() {
  const [tripName, setTripName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [tripType, setTripType] = useState("בחר");
  const navigate = useNavigate();

  // דוגמאות לנתונים
  // const participantsOptions = Array.from({ length: 20 }, (_, i) => `${i + 1}`);
  const citiesByCountry = {
    ישראל: ["תל אביב", "ירושלים", "חיפה"],
    יפן: ["טוקיו", "קיוטו", "אוסקה"],
    צרפת: ["פריז", "ניס", "ליון"],
    'ארה"ב': ["ניו יורק", "לוס אנג׳לס", "סן פרנסיסקו"],
  };

  // Here we handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // מיפוי סוגי טיול
    const tripTypeMap = {
      "טיול אופניים": "bicycle",
      "טיול רגלי": "trek",
    };

    const tripTypeValue = tripTypeMap[tripType];

    if (!tripTypeValue) {
      alert("יש לבחור סוג טיול חוקי.");
      return;
    }

    try {
      const requestData = {
        tripName,
        tripType: tripTypeValue,
        country,
        city,
      };

      const token = localStorage.getItem("token");
      if (!token) {
        alert("לא נמצאה התחברות. נא להתחבר מחדש.");
        return;
      }

      const response = await axios.post("/api/trips/generate", requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Generated trip:", response.data);

      // Navigate to the trip options page with the generated trip data
      navigate("/tripoptions", { state: response.data.data });
    } catch (error) {
      console.error("Error generating trip:", error);
      alert("אירעה שגיאה ביצירת המסלול.");
    }
  };

  return (
    <div dir="rtl" className="planner-page">
      <h1>תכנון מסלול</h1>
      <form onSubmit={handleSubmit} className="planner-form">
        <FormStringInput
          label="שם הטיול:"
          type="text"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
          placeholder="למשל: טיול אופניים באיזור הצפון"
        />

        <FormDDLInput
          label="מדינה:"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setCity("");
          }}
          options={Object.keys(citiesByCountry)}
          required
        />

        <FormDDLInput
          label="עיר יעד:"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          options={country ? citiesByCountry[country] : []}
          required
          disabled={!country}
        />

        <FormDDLInput
          label="סוג הטיול:"
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
          options={["טיול רגלי", "טיול אופניים"]}
          required
        />

        <button type="submit" className="planner-submit">
          צור מסלול
        </button>
      </form>
    </div>
  );
}

export default PlannerPage;
// This is the PlannerPage component that allows users to plan a trip.
